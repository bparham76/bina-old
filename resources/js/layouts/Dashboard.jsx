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

import AddressNew from "../components/dashboard/common/AddressNew";
import AddressEdit from "../components/dashboard/common/AddressEdit";
import OrderDetails from "../components/dashboard/common/OrderDetails";
import ShopCartDetails from "../components/dashboard/common/ShopCartDetails";

import CustomerFinancials from "../components/dashboard/customer/CustomerFinancials";

const Dashboard = () => {
    const mobile = useMediaQuery("(max-width: 900px)");
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
                return;
            case "profile":
                return <ProfileInfo />;
            case "addresses":
                if (act == "edit") return <AddressEdit />;
                else if (act == "new") return <AddressNew />;
                else return <Addresses />;
            case "order-history":
                if (act == "show") return <OrderDetails />;
                else return <OrderHistory />;
            case "carts":
                if (act == "show") return <ShopCartDetails />;
                else return <ShoppingCarts />;
            case "financials":
                //check for user role and load page based on that
                return <CustomerFinancials />;
            default:
                return <Box sx={{ width: "100%", height: "80vh" }}>404</Box>;
        }
    };

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
                        {render && <DashboardView />}
                    </Grid>
                </Grid>
            </Box>

            <Footer />
        </>
    );
};

export default Dashboard;
