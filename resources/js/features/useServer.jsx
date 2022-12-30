import axios from "axios";
import { useAuthenticate } from "./auth/AuthEcosystem";
import { useState, useEffect } from "react";

export default function useServer() {
    const { token } = useAuthenticate();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [method, setMethod] = useState("");
    const [url, setUrl] = useState("");
    const [execute, setExecute] = useState(false);

    useEffect(() => {
        if (!execute) return;
        if (method == "" || url == "") return;

        setExecute(false);
        setResponse(null);
        setError(null);

        switch (method) {
            case "get":
                get();
                return;
            case "post":
                post();
                return;
            default:
                return;
        }
    }, [execute]);

    const get = async () => {
        try {
            setLoading(true);

            const res = await axios.get(url, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            });

            if (res.status < 400) {
                setResponse(res.data);
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
            setMethod("");
            setUrl("");
        }
    };

    const post = async () => {
        try {
            setLoading(true);

            const res = await axios.post(url, data, {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            });

            if (res.status < 400) {
                setResponse(res.data);
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
            setMethod("");
            setUrl("");
        }
    };

    const sendRequest = ({ url = "", method = "", data = null }) => {
        setMethod(method);
        setData(data);
        setUrl(url);
        setExecute(true);
    };

    useEffect(() => {
        if (!loading) window?.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    }, [loading]);

    return { response, error, loading, sendRequest };
}
