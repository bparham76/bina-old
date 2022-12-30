import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { useAuthenticate } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import DashboardMenu from "../components/dashboard/DashboardMenu";
import DashboardView from "../features/dashboard/DashboardView";

import { useShopInfo } from "../features/shop/ShopEcosystem";

const Dashboard = () => {
    const mobile = useMediaQuery("(max-width: 900px)");
    const { shopName, shopDescription } = useShopInfo();
    const [render, setRender] = useState(false);
    const { authenticated, loading } = useAuthenticate();
    const navigate = useNavigate();
    const { dist, act } = useParams();

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
        else setRender(true);
    }, [authenticated, loading]);

    return (
        <>
            <Header websiteName={shopName} websiteDetails={shopDescription} />
            <Box sx={{ p: 2 }}>
                <Grid container sx={{ p: 2 }} spacing={2}>
                    <Grid item xs={12} md={3}>
                        <Box sx={mobile ? {} : { position: "sticky", top: 90 }}>
                            <DashboardMenu />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        {render && <DashboardView dist={dist} act={act} />}
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    );
};

export default Dashboard;
