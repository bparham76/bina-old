import { Button, Box } from "@mui/material";
import { useEffect } from "react";
import Header from "../components/general/Header";
import { useAuthenticate } from "../features/auth/AuthEcosystem";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { authenticated, loading, logout } = useAuthenticate();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
    }, [authenticated, loading]);

    return (
        <>
            <Header
                websiteName="بازرگانی مهر"
                websiteDetails="نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
            />
            <h1>Dashboard page</h1>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "1500px",
                }}
            >
                <Button
                    onClick={(e) => {
                        logout();
                        navigate("/");
                    }}
                    variant="contained"
                    color="error"
                >
                    خروج
                </Button>
                <Button variant="outlined" onClick={(e) => navigate("/fuck")}>
                    صفحه اول
                </Button>
                <Button
                    variant="outlined"
                    onClick={(e) => navigate("/fuck/you")}
                >
                    صفحه دوم
                </Button>
            </Box>
        </>
    );
};

export default Dashboard;
