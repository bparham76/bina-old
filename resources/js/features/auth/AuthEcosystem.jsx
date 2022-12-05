import axios from "axios";
import { reducer } from "./reducer";
import { useReducer, createContext, useContext } from "react";

export const AuthContext = createContext(null);

const AuthEcosystem = (props) => {
    const { children } = props;

    const _data = {
        stage: 0,
        error: 0,
        phone: "",
        token: "",
        authenticated: false,
        loading: false,
    };
    const [authData, dispatch] = useReducer(reducer, _data);

    const sendCode = async (phone) => {
        try {
            if (!/^\d{11}$/.test(phone)) return;

            dispatch({ type: "loading" });

            const response = await axios.get("/api/sendcode?phone=" + phone, {
                Accept: "Application/json",
            });

            if (response !== null) {
                dispatch({ type: "add_phone", payload: { phone: phone } });
                console.log(response.data);
            }
        } catch (e) {
            dispatch({ type: "error_no_connection" });
        } finally {
            dispatch({ type: "loaded" });
        }
    };

    const verifyCode = async (code) => {
        try {
            if (!/^\d{6}$/.test(code)) return;

            dispatch({ type: "loading" });

            const response = await axios.get(
                "/api/verifycode?phone=" + authData.phone + "&code=" + code,
                { Accept: "Application/json" }
            );

            if (response != null) {
                dispatch({
                    type: "commit_login",
                    payload: { token: response.data.token },
                });
                localStorage.setItem("token", response.data.token);
            }
        } catch (e) {
            if (e.response.status === 401)
                dispatch({ type: "error_wrong_code" });
            else if (e.response.status === 403)
                dispatch({ type: "error_code_expired" });
            else dispatch({ type: "error_no_connection" });
        } finally {
            dispatch({ type: "loaded" });
        }
    };

    const clearAuthData = () => {
        dispatch({ type: "commit_logout" });
        localStorage.removeItem("token");
    };

    const checkAuthState = async () => {
        const c = decodeURIComponent(document.cookie);
        const ca = c.split(";");
        ca.forEach((i) => console.table(i));

        try {
            dispatch({ type: "loading" });

            const token = authData.token
                ? authData.token
                : localStorage.getItem("token")
                ? localStorage.getItem("token")
                : null;

            const response = await axios.get(
                // "/api/check",
                "sanctum/csrf-cookie",
                // {},
                {
                    headers: {
                        accept: "application/json",
                        // Authorization: "Bearer " + token,
                    },
                }
            );

            if (response !== null) {
                dispatch({
                    type: "commit_login",
                    payload: { token: token },
                });
                localStorage.setItem("token", token);
                // console.log(response);
            }
        } catch (e) {
            clearAuthData();
        } finally {
            dispatch({ type: "loaded" });
        }
    };

    return (
        <AuthContext.Provider
            value={{
                ...authData,
                dispatch,
                sendCode,
                verifyCode,
                checkAuthState,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthEcosystem;

// if (/^\d{11}$/.test(authData.phone)) sendCode();

export const useAuthStage = () => {
    const { stage } = useContext(AuthContext);
    return stage;
};

export const useAuthenticate = () => {
    const {
        sendCode,
        verifyCode,
        loading,
        error,
        authenticated,
        checkAuthState,
    } = useContext(AuthContext);

    return {
        sendCode,
        verifyCode,
        loading,
        error,
        authenticated,
        checkAuthState,
    };
};
