import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/general/Header";
import { useAuthenticate } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";
import DashboardMenu from "../components/dashboard/DashboardMenu";

const Dashboard = () => {
    const { authenticated, loading } = useAuthenticate();
    const navigate = useNavigate();
    const { dist } = useParams();
    const mobile = useMediaQuery("(max-width: 450px)");

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
    }, [authenticated, loading]);

    return (
        <>
            <Header
                websiteName="بازرگانی مهر"
                websiteDetails="نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
            />
            <Grid
                container
                sx={{
                    p: 2,
                    pt: mobile ? 2 : 4,
                }}
            >
                <Grid item xs={12} sm={2}>
                    <Box sx={{ position: "fixed" }}>
                        <DashboardMenu />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Box sx={{ height: 1000 }}>{dist}</Box>
                </Grid>
            </Grid>
            {/* <Box
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
            </Box> */}
        </>
    );
};

export default Dashboard;
