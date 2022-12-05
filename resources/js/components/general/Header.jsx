import { useState, useEffect } from "react";
import {
    Grid,
    Box,
    Stack,
    Button,
    Fab,
    Typography,
    useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ComponentPopper from "./ComponentPopper";
import ReorderIcon from "@mui/icons-material/Reorder";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import TestBtn from "./TestBtn";

const Header = (props) => {
    const { websiteName, websiteDetails, ...otherProps } = props;

    const mobileScreen = useMediaQuery("(max-width: 450px)");
    const tabletScreen = useMediaQuery("(max-width: 700px)");

    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openProducts, setOpenProducts] = useState(false);

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
            <Box
                sx={{
                    position: "fixed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "100vw",
                    bottom: 0,
                    p: 2,
                }}
            >
                <Fab
                    variant="circular"
                    color="primary"
                    size="large"
                    sx={{ p: 3 }}
                    onClick={() => setOpenMenu(true)}
                >
                    <MenuOpenIcon />
                    {/* مشاهده گزینه ها */}
                </Fab>
            </Box>
        );
    };

    const ActionButton = (props) => {
        return (
            <Button
                {...props}
                color="secondary"
                variant="outlined"
                sx={{ border: "none", "&:hover": { border: "none" } }}
            >
                {props.children}
            </Button>
        );
    };

    const ActionButtonGroup = (props) => {
        return (
            <>
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
                    startIcon={<AccountBoxIcon />}
                    onClick={() => (window.location.href = "/auth")}
                >
                    پروفایل کاربری
                </ActionButton>
            </>
        );
    };

    useEffect(() => {
        drawerState("close");
    }, [mobileScreen]);

    return (
        <>
            <Grid
                container
                spacing={1}
                sx={{
                    width: "100vw",
                    p: 2,
                    zIndex: 100000,
                }}
            >
                <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                    // md={8}
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
                    sm={6}
                    // md={4}
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
                fullScreen
                onClick={() => setOpenProducts(false)}
            >
                Products list place
                <TestBtn />
            </ComponentPopper>
            <ComponentPopper
                open={openSearch}
                anchor="bottom"
                onClick={() => setOpenSearch(false)}
            >
                Search place
            </ComponentPopper>
            <ComponentPopper
                open={openCart}
                anchor="left"
                onClick={() => setOpenCart(false)}
            >
                Shopping cart place
            </ComponentPopper>

            {mobileScreen && <FloatMenuButton />}
        </>
    );
};

export default Header;
