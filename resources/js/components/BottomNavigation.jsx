import { Stack, Button, Paper, useMediaQuery } from "@mui/material";

import {
    AccountCircle,
    ShoppingBasket,
    TroubleshootRounded,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import MobileMenuDrawer from "./MobileMenuDrawer";
import ShoppingCartDrawer from "./ShoppingCartDrawer";
import SearchDrawer from "./SearchDrawer";

import { useState } from "react";

const BottomNavigation = () => {
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [cartDrawer, setCartDrawer] = useState(false);
    const [menuDrawer, setMenuDrawer] = useState(false);

    const closeAllDrawers = () => {
        setSearchDrawer(false);
        setCartDrawer(false);
        setMenuDrawer(false);
    };

    const mobile = useMediaQuery("(max-width: 450px)");
    if (!mobile) return;

    const loginButton = () => (window.location.href = "/login");

    const MenuButton = (props) => {
        const { children, ...others } = props;

        return (
            <Button
                variant="text"
                {...others}
                sx={{ height: "100%", color: "black" }}
            >
                {children}
            </Button>
        );
    };
    return (
        <>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 75,
                    p: 0,
                }}
                elevation={4}
                square
            >
                <Stack
                    direction="row"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <MenuButton onClick={() => setMenuDrawer(true)}>
                        <MenuIcon />
                    </MenuButton>
                    <MenuButton onClick={() => setSearchDrawer(true)}>
                        <SearchIcon />
                    </MenuButton>
                    <MenuButton>
                        <HomeIcon />
                    </MenuButton>
                    <MenuButton onClick={() => setCartDrawer(true)}>
                        <ShoppingBasket />
                    </MenuButton>
                    <MenuButton onClick={loginButton}>
                        <AccountCircle />
                    </MenuButton>
                </Stack>
            </Paper>
            <MobileMenuDrawer
                show={menuDrawer}
                onClose={() => setMenuDrawer(false)}
            />
            <ShoppingCartDrawer
                show={cartDrawer}
                onClose={() => setCartDrawer(false)}
            />
            <SearchDrawer
                show={searchDrawer}
                onClose={() => setSearchDrawer(false)}
            />
        </>
    );
};

export default BottomNavigation;
