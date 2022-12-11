import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { useAuthenticate, useUserData } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import DashboardMenu from "../components/dashboard/DashboardMenu";
import DashboardEcosystem from "../features/dashboard/DashboardEcosystem";

import { useShopInfo } from "../features/shop/ShopEcosystem";

import useSetCurrentPage from "../features/dashboard/useSetCurrentPage";

const Dashboard = () => {
    const [render, setRender] = useState(false);
    const { authenticated, loading } = useAuthenticate();
    const { role } = useUserData();
    const navigate = useNavigate();
    const { dist, act } = useParams();
    const mobile = useMediaQuery("(max-width: 450px)");
    const { shopName, shopDescription } = useShopInfo();

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
        else setRender(true);
    }, [authenticated, loading]);

    const CurrentDashboardPage = () =>
        useSetCurrentPage({ dist: dist, act: act, role: role });

    if (!render) return;

    return (
        <>
            <Header websiteName={shopName} websiteDetails={shopDescription} />
            <DashboardEcosystem>
                <Grid
                    container
                    sx={{
                        p: 2,
                        pt: mobile ? 2 : 4,
                        backgroundColor: "snow",
                    }}
                >
                    <Grid item xs={12} sm={2}>
                        <Box
                            sx={{
                                zIndex: 900,
                                position: "sticky",
                                top: 120,
                            }}
                        >
                            <DashboardMenu />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Box>
                            <CurrentDashboardPage />
                        </Box>
                    </Grid>
                </Grid>
            </DashboardEcosystem>
            <Footer />
        </>
    );
};

export default Dashboard;
