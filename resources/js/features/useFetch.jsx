import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useAuthenticate } from "./auth/AuthEcosystem";

const useFetch = (url, method, data = {}) => {
    const mounted = useRef(true);
    const [done, setDone] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState({});
    const { token } = useAuthenticate();

    const get = async () => {
        try {
            const res = await axios({
                url: url,
                method: method,
                data: data,
                headers: {
                    Accept: "Application/json",
                    Authorization: "Bearer " + token,
                },
            });
            if (res !== null && mounted.current) setResult(res);
        } catch (e) {
            setError(e);
        } finally {
            setDone(true);
        }
    };

    useEffect(() => {
        get();

        return () => (mounted.current = false);
    }, [url, mounted]);

    return { done, result, error };
};

export default useFetch;
