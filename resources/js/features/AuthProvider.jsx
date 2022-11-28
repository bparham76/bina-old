import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthSendCode = (phone) => {};

export const useAuthVerifyPhone = (code) => {};

export const useAuth = () => {
    const { state, loading } = useContext(AuthContext);

    if (loading) return 0;
    else if (state) return 1;
    else return -1;
};

const AuthProvider = (props) => {
    const { children } = props;

    const [authLoading, setAuthLoading] = useState(true);
    const [state, setState] = useState(false);
    const [userID, setUserID] = useState("");
    const [token, setToken] = useState("");
    const [phone, setPhone] = useState("");

    console.log("render auth provider");

    const checkServerForAuth = async () => {
        try {
            const response = await axios.post("/api/check", {
                accept: "application/json",
            });
            setState(true);
        } catch (error) {
            setState(false);
        } finally {
            setAuthLoading(false);
        }
    };

    useEffect(() => {
        checkServerForAuth();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                loading: authLoading,
                state: state,
                userID: userID,
                token: token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
