import axios from "axios";
import { reducer } from "./reducer";
import { useReducer, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext(null);

const AuthEcosystem = (props) => {
    const { children } = props;

    const _data = {
        stage: 0,
        error: 0,
        phone: "",
        token: "",
        authenticated: false,
        loading: true,
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

    const resendCode = () => dispatch({ type: "resend_code" });

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

    const logout = async () => {
        try {
            dispatch({ type: "loading" });
            const response = await axios.post(
                "/api/logout",
                {},
                {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + authData.token,
                    },
                }
            );
            if ((response !== null) & (response.status < 400)) clearAuthData();
        } catch (e) {
            dispatch({ type: "error_no_connection" });
        } finally {
            dispatch({ type: "loaded" });
        }
    };

    const clearAuthData = () => {
        dispatch({ type: "commit_logout" });
        localStorage.removeItem("token");
    };

    const checkAuthState = async () => {
        try {
            dispatch({ type: "loading" });

            const token = authData.token
                ? authData.token
                : localStorage.getItem("token")
                ? localStorage.getItem("token")
                : null;

            const response = await axios.post(
                "/api/check",
                {},
                {
                    headers: {
                        accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            );

            if (response !== null) {
                dispatch({
                    type: "commit_login",
                    payload: { token: token },
                });
                localStorage.setItem("token", token);
            }
        } catch (e) {
            clearAuthData();
        } finally {
            dispatch({ type: "loaded" });
        }
    };

    const abortAuth = () => dispatch({ type: "abort" });

    useEffect(() => {
        if (!authData.authenticated) checkAuthState();
    }, [authData.authenticated]);

    return (
        <AuthContext.Provider
            value={{
                ...authData,
                dispatch,
                abortAuth,
                sendCode,
                verifyCode,
                checkAuthState,
                logout,
                resendCode,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthEcosystem;

export const useAuthStage = () => {
    const { stage } = useContext(AuthContext);
    return stage;
};

export const useAuthenticate = () => {
    const { ...AuthEco } = useContext(AuthContext);
    return { ...AuthEco };
};

export const useUserData = () => {
    return { role: 0 };
};
