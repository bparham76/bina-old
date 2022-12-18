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

    useEffect(() => {
        if (method == "") return;

        switch (method) {
            case "get":
                get();
                break;
            case "post":
                post();
                break;
            default:
                break;
        }

        return () => {
            setMethod("");
            setUrl("");
            setData(null);
            setError(null);
            setResponse(null);
            setLoading(false);
        };
    }, [url]);

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
                // console.log(response);
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
                // console.log(response);
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
    };

    return { response, error, loading, sendRequest };
}
