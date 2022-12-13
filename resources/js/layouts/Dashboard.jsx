import { useMediaQuery, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { useAuthenticate, useUserData } from "../features/auth/AuthEcosystem";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/general/Header";
import Footer from "../components/general/Footer";

import DashboardMenu from "../components/dashboard/DashboardMenu";

import { useShopInfo } from "../features/shop/ShopEcosystem";

import ProfileInfo from "../components/dashboard/common/ProfileInfo";
import Addresses from "../components/dashboard/common/Addresses";
import OrderHistory from "../components/dashboard/common/OrderHistory";
import ShoppingCarts from "../components/dashboard/common/ShoppingCarts";

import AddressDetails from "../components/dashboard/common/AddressDetails";
import OrderDetails from "../components/dashboard/common/OrderDetails";
import ShopCartDetails from "../components/dashboard/common/ShopCartDetails";

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
                if (act == "edit") return <AddressDetails edit />;
                else if (act == "new") return <AddressDetails />;
                else return <Addresses />;
            case "order-history":
                if (act == "show") return <OrderDetails />;
                else return <OrderHistory />;
            case "carts":
                if (act == "show") return <ShopCartDetails />;
                else return <ShoppingCarts />;
            default:
                return <Box sx={{ width: "100%", height: "80vh" }}>404</Box>;
        }
    };

    // if (!render) return;

    return (
        <>
            <Header websiteName={shopName} websiteDetails={shopDescription} />
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
                    {render && <DashboardView />}
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Dashboard;
