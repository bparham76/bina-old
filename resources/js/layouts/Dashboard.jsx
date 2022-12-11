import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { useAuthenticate, useUserData } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import DashboardMenu from "../components/dashboard/DashboardMenu";
import DashboardEcosystem from "../features/dashboard/DashboardEcosystem";

import { useShopInfo } from "../features/shop/ShopEcosystem";

import ProfileInfo from "../components/dashboard/common/ProfileInfo";
import Addresses from "../components/dashboard/common/Addresses";
import OrderHistory from "../components/dashboard/common/OrderHistory";
import ShoppingCarts from "../components/dashboard/common/ShoppingCarts";

import NewAddress from "../components/dashboard/common/NewAddress";
import EditAddress from "../components/dashboard/common/EditAddress";

const Dashboard = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const { shopName, shopDescription } = useShopInfo();
    const [render, setRender] = useState(false);
    const { authenticated, loading } = useAuthenticate();
    const navigate = useNavigate();
    const { role } = useUserData();
    const { dist, act } = useParams();

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
        else setRender(true);
    }, [authenticated, loading]);

    const DashboardView = () => {
        switch (dist) {
            case undefined:
                return <ProfileInfo />;
            case "profile":
                return <ProfileInfo />;
            case "addresses":
                switch (act) {
                    case "edit":
                        return <EditAddress />;
                    case "new":
                        return <NewAddress />;
                    default:
                        return <Addresses />;
                }
                break;
            case "order-history":
                return <OrderHistory />;
            case "carts":
                return <ShoppingCarts />;
            default:
                return <Box sx={{ width: "100%", height: "80vh" }}>404</Box>;
        }
    };

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
                        <DashboardView />
                    </Grid>
                </Grid>
            </DashboardEcosystem>
            <Footer />
        </>
    );
};

export default Dashboard;
