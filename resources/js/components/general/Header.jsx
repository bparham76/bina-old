import { Box, Grid, useMediaQuery, Typography, Button } from "@mui/material";
import { ShoppingCart, Login } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useLayoutEffect, useState } from "react";
import { useShopInfo } from "../../features/shop/ShopEcosystem";
import { useAuthenticate } from "../../features/auth/AuthEcosystem";
import { useSetWebPage } from "../../features/shop/ShopEcosystem";
import SuperMenu from "./header/SuperMenu";
import SuperSearch from "./header/SuperSearch";

const Header = () => {
    const mediumScreen = useMediaQuery("(max-width: 900px)");
    const smallScreen = useMediaQuery("(max-width: 450px)");
    const [showHeaderBorder, setShowHeaderBorder] = useState(false);

    const { shopName, shopDescription } = useShopInfo();
    const { authenticated } = useAuthenticate();
    const goto = useSetWebPage();

    useLayoutEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) setShowHeaderBorder(true);
            else setShowHeaderBorder(false);
        });
    }, []);

    const InfoBlock = () => (
        <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Typography variant="h6">{shopName}</Typography>
            <Typography variant="caption">{shopDescription}</Typography>
        </Grid>
    );
    const QuickAccessBlock = () => (
        <Grid item xs={9} md={6}>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    p: 2,
                }}
            >
                {mediumScreen && <SuperSearch />}
                {authenticated ? (
                    <>
                        <Button
                            sx={{
                                color: "black",
                            }}
                            size="large"
                            startIcon={!smallScreen && <DashboardIcon />}
                            onClick={(e) => goto({ page: "/dashboard" })}
                        >
                            {smallScreen ? <DashboardIcon /> : "پروفایل کاربری"}
                        </Button>
                    </>
                ) : (
                    <Button
                        sx={{
                            color: "black",
                        }}
                        size="large"
                        startIcon={!smallScreen && <Login />}
                        onClick={(e) => goto({ page: "/dashboard" })}
                    >
                        {smallScreen ? <Login /> : "ورود یا ثبت نام"}
                    </Button>
                )}
                <Button
                    sx={{
                        color: "black",
                    }}
                    size="large"
                >
                    <ShoppingCart />
                </Button>
            </Box>
        </Grid>
    );
    const MenuBlock = () => (
        <Grid item xs={3} md={12}>
            <SuperMenu />
        </Grid>
    );

    return (
        <>
            <Grid
                container
                sx={{
                    position: !mediumScreen && "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    boxShadow: !mediumScreen && showHeaderBorder && 2,
                    bgcolor: "white",
                    zIndex: 1000,
                }}
            >
                {!mediumScreen ? (
                    <>
                        <InfoBlock />
                        <QuickAccessBlock />
                        <MenuBlock />
                    </>
                ) : (
                    <>
                        <InfoBlock />
                        <MenuBlock />
                        <QuickAccessBlock />
                    </>
                )}
            </Grid>
            {!mediumScreen && <Box sx={{ height: 100, width: "100%" }}></Box>}
        </>
    );
};

export default Header;
