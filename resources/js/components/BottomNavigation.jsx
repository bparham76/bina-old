import { Stack, Button, Paper, useMediaQuery } from "@mui/material";

import { AccountCircle, ShoppingBasket } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const BottomNavigation = () => {
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
                <MenuButton>
                    <MenuIcon />
                </MenuButton>
                <MenuButton>
                    <SearchIcon />
                </MenuButton>
                <MenuButton>
                    <HomeIcon />
                </MenuButton>
                <MenuButton>
                    <ShoppingBasket />
                </MenuButton>
                <MenuButton onClick={loginButton}>
                    <AccountCircle />
                </MenuButton>
            </Stack>
        </Paper>
    );
};

export default BottomNavigation;
