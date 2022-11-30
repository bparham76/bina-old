import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuthSendCode = (phone) => {};

export const useAuthVerifyPhone = (code) => {};

export const useAuth = () => {
    const { state, loading, phone, setPhone, code, setCode } =
        useContext(AuthContext);
    return { state, phone, setPhone, code, setCode };
    // if (loading) return 0;
    // else if (state) return 1;
    // else return -1;
};

const AuthEcosystem = (props) => {
    const { children } = props;

    const [authLoading, setAuthLoading] = useState(true);
    const [state, setState] = useState(false);
    const [userID, setUserID] = useState("");
    const [token, setToken] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");

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

    const sendCode = async () => {
        alert(phone);
    };

    useEffect(() => {
        if (/^\d{11}$/.test(phone)) sendCode();
        // else console.error("fucked up phone format");
    }, [phone]);

    const verifyPhone = async () => {
        alert(code);
    };

    useEffect(() => {
        if (/^\d{6}$/.test(code)) verifyPhone();
        // else console.error("fucked up code format");
    }, [code]);

    return (
        <AuthContext.Provider
            value={{
                loading: authLoading,
                state: state,
                userID: userID,
                token: token,
                phone: phone,
                setPhone: setPhone,
                code: code,
                setCode: setCode,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthEcosystem;
