import { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
    Paper,
    Grid,
    Box,
    Stack,
    Button,
    Fab,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "../../features/auth/AuthEcosystem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ComponentPopper from "./ComponentPopper";
import ReorderIcon from "@mui/icons-material/Reorder";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCart from "./header/ShoppingCart";
import ProductCategory from "./header/ProductCategory";
import Search from "./header/Search";

const Header = (props) => {
    const { websiteName, websiteDetails, ...otherProps } = props;
    const navigate = useNavigate();
    const { authenticated } = useAuthenticate();
    const mobileScreen = useMediaQuery("(max-width: 450px)");
    const tabletScreen = useMediaQuery("(max-width: 700px)");

    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);

    const [headerBorder, setHeaderBorder] = useState(false);

    const headerRef = useRef();
    const [holderHeight, setHolderHeight] = useState(0);

    useLayoutEffect(() => {
        setHolderHeight(headerRef.current.clientHeight);

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) setHeaderBorder(true);
            else setHeaderBorder(false);
        });
    }, []);

    const drawerState = (state) => {
        switch (state) {
            case "close":
                setOpenMenu(false);
                setOpenSearch(false);
                setOpenCart(false);
                setOpenProducts(false);
                break;
            case "menu":
                drawerState("close");
                setOpenMenu(true);
                break;
            case "cart":
                drawerState("close");
                setOpenCart(true);
                break;
            case "search":
                drawerState("close");
                setOpenSearch(true);
                break;
            case "products":
                drawerState("close");
                setOpenProducts(true);
                break;
            default:
                break;
        }
    };

    const FloatMenuButton = (props) => {
        return (
            <Fab
                variant="circular"
                color="primary"
                size="large"
                sx={{
                    m: 2,
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    bgcolor: "lightcoral",
                    "&:click": {
                        bgcolor: "lightcoral",
                    },
                    "&:hover": {
                        bgcolor: "lightcoral",
                    },
                }}
                onClick={() => setOpenMenu(true)}
            >
                <MenuOpenIcon />
            </Fab>
        );
    };

    const ActionButton = (props) => {
        return (
            <Button
                {...props}
                variant="outlined"
                disableRipple
                disableFocusRipple
                disableElevation
                sx={{
                    color: "lightcoral",
                    border: "none",
                    "&:hover": {
                        backgroundColor: "transparent",
                        border: "none",
                        color: "red",
                    },
                    "&:click": {
                        backgroundColor: "transparent",
                        color: "red",
                    },
                }}
            >
                {props.children}
            </Button>
        );
    };

    const ActionButtonGroup = (props) => {
        return (
            <>
                <ActionButton
                    startIcon={<HomeIcon />}
                    onClick={() => navigate("/")}
                >
                    صفحه اصلی
                </ActionButton>
                <ActionButton
                    startIcon={<ReorderIcon />}
                    onClick={() => drawerState("products")}
                >
                    دسته بندی محصولات
                </ActionButton>
                <ActionButton
                    startIcon={<SearchIcon />}
                    onClick={() => drawerState("search")}
                >
                    جستجو
                </ActionButton>
                <ActionButton
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => drawerState("cart")}
                >
                    سبد خرید
                </ActionButton>
                <ActionButton
                    startIcon={
                        authenticated ? <DashboardIcon /> : <AccountBoxIcon />
                    }
                    onClick={() =>
                        navigate(authenticated ? "/dashboard" : "/auth")
                    }
                >
                    {authenticated ? "پروفایل کاربری" : "ورود یا ثبت نام"}
                </ActionButton>
            </>
        );
    };

    useEffect(() => {
        drawerState("close");
    }, [mobileScreen]);

    return (
        <>
            <Paper
                square
                elevation={headerBorder ? 5 : 0}
                sx={{
                    width: "100vw",
                    zIndex: 1000,
                    position: "fixed",
                    top: 0,
                    p: 0,
                    m: 0,
                }}
                ref={headerRef}
            >
                <Grid
                    container
                    spacing={mobileScreen ? 0 : 1}
                    sx={{
                        width: "100vw",
                        py: 1,
                        px: mobileScreen ? 0 : 2,
                        m: 0,
                    }}
                >
                    <Grid
                        item
                        container
                        xs={12}
                        sm={4}
                        sx={{
                            justifyContent: tabletScreen ? "center" : "start",
                            alignItems: "center",
                        }}
                    >
                        <Stack
                            sx={{
                                "&:hover": { cursor: "default" },
                            }}
                        >
                            <Typography variant="h1" fontSize="2rem">
                                {websiteName && websiteName}
                            </Typography>
                            <Typography variant="p" fontSize="0.8rem">
                                {websiteDetails && websiteDetails}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        sm={8}
                        sx={{
                            justifyContent: tabletScreen ? "center" : "end",
                            alignItems: "center",
                        }}
                    >
                        <Stack direction="row" spacing={tabletScreen ? 0 : 1}>
                            {!mobileScreen && <ActionButtonGroup />}
                        </Stack>
                    </Grid>
                </Grid>

                <ComponentPopper
                    open={openMenu}
                    anchor="bottom"
                    autoHeight
                    onClick={() => setOpenMenu(false)}
                >
                    <Stack spacing={4}>
                        <ActionButtonGroup />
                    </Stack>
                </ComponentPopper>
                <ComponentPopper
                    open={openProducts}
                    anchor="right"
                    onClick={() => setOpenProducts(false)}
                >
                    <ProductCategory />
                </ComponentPopper>
                <ComponentPopper
                    open={openSearch}
                    anchor="top"
                    onClick={() => setOpenSearch(false)}
                >
                    <Search />
                </ComponentPopper>
                <ComponentPopper
                    open={openCart}
                    anchor="left"
                    onClick={() => setOpenCart(false)}
                >
                    <ShoppingCart />
                </ComponentPopper>

                {mobileScreen && <FloatMenuButton />}
            </Paper>
            <Box
                sx={{
                    width: "100%",
                    height: holderHeight,
                    top: 0,
                }}
            ></Box>
        </>
    );
};

export default Header;
