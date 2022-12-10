import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import { useAuthenticate } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";
import DashboardMenu from "../components/dashboard/DashboardMenu";

import ProfileInfo from "../components/dashboard/common/ProfileInfo";
import Addresses from "../components/dashboard/common/Addresses";
import OrderHistory from "../components/dashboard/common/OrderHistory";
import ShoppingCarts from "../components/dashboard/common/ShoppingCarts";

import DashboardEcosystem from "../features/dashboard/DashboardEcosystem";

import { useShopInfo } from "../features/shop/ShopEcosystem";

const Dashboard = () => {
    const [render, setRender] = useState(false);
    const { authenticated, loading } = useAuthenticate();
    const navigate = useNavigate();
    const { dist } = useParams();
    const mobile = useMediaQuery("(max-width: 450px)");
    const { shopName, shopDescription } = useShopInfo();

    useEffect(() => {
        if (!loading & !authenticated) navigate("/auth");
        else setRender(true);
    }, [authenticated, loading]);

    const showDashboardPagePart = () => {
        switch (dist) {
            case "":
            case "profile":
                return <ProfileInfo />;
            case "addresses":
                return <Addresses />;
            case "order-history":
                return <OrderHistory />;
            case "carts":
                return <ShoppingCarts />;
            default:
                return <Box sx={{ width: "100%", height: "80vh" }}></Box>;
        }
        //if(user role = customer)
        //else if(user role = sth else)
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
                        <Box>{showDashboardPagePart()}</Box>
                    </Grid>
                </Grid>
            </DashboardEcosystem>
            <Footer />
        </>
    );
};

export default Dashboard;
