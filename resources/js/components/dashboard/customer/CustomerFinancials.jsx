import { useEffect, useState } from "react";
import useServer from "../../../features/useServer";

const CustomerFinancials = () => {
    const { loading, response, sendRequest } = useServer();
    const [exec, setExec] = useState(false);
    const [exec2, setExec2] = useState(false);
    const [exec3, setExec3] = useState(false);
    const [exec4, setExec4] = useState(false);

    useEffect(() => {
        if (exec) {
            setExec(false);
            sendRequest({ url: "/api/time", method: "get" });
        }
    }, [exec]);

    useEffect(() => {
        if (exec2) {
            setExec2(false);
            sendRequest({ url: "/api/sth", method: "get" });
        }
    }, [exec2]);

    useEffect(() => {
        if (exec3) {
            setExec3(false);
            sendRequest({ url: "/api/time-post", method: "post" });
        }
    }, [exec3]);

    useEffect(() => {
        if (exec4) {
            setExec4(false);
            sendRequest({ url: "/api/sth-post", method: "post" });
        }
    }, [exec4]);

    // if (loading) return "loading...";

    return (
        <>
            <h1>Customer Financials</h1>
            <button onClick={(e) => setExec(true)}>Send Get Request 1</button>
            <br />
            <button onClick={(e) => setExec2(true)}>Send Get Request 2</button>
            <br />
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1>
                        {response && response.datetime && response.datetime}
                    </h1>
                    <h1>{response && response.item1 && response.item1}</h1>
                </>
            )}
            <br />

            <button onClick={(e) => setExec3(true)}>Send Post Request 1</button>
            <br />
            <button onClick={(e) => setExec4(true)}>Send Post Request 2</button>
            <br />
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <h1>
                        {response && response.datetime && response.datetime}
                    </h1>
                    <h1>{response && response.item1 && response.item1}</h1>
                </>
            )}
        </>
    );
};

export default CustomerFinancials;
