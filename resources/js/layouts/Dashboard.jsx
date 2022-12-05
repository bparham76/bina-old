import { Button } from "@mui/material";
import { useEffect } from "react";
import Header from "../components/general/Header";
import { useAuthenticate } from "../features/auth/AuthEcosystem";

const Dashboard = () => {
    const { authenticated, checkAuthState, loading } = useAuthenticate();

    /*
    useEffect(() => {
        checkAuthState();
        setTimeout(() => {
            if (!loading) console.log(authenticated);
        }, 5000);
    }, []);*/

    useEffect(() => {
        checkAuthState();
    }, []);

    useEffect(() => {
        console.log(authenticated);
        // if (!authenticated) window.location.href = "/auth";
    }, [loading]);

    return (
        <>
            <Header
                websiteName="بازرگانی مهر"
                websiteDetails="نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
            />
            <h1>Dashboard page</h1>
            <Button
                variant="contained"
                color="error"
                onClick={() => console.log("fuck")}
            >
                Click On ME
            </Button>
        </>
    );
};

export default Dashboard;
