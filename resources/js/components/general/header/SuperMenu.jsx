import {
    useMediaQuery,
    useScrollTrigger,
    Collapse,
    Box,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SideMenuDrawer from "./SideMenuDrawer";

const SuperMenu = () => {
    const mediumScreen = useMediaQuery("(max-width: 900px)");
    const scroll = useScrollTrigger();
    const [menuOpen, setMenuOpen] = useState(false);

    return mediumScreen ? (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    p: 2,
                }}
            >
                <Button
                    sx={{
                        color: "black",
                        position: "sticky",
                        top: 10,
                    }}
                    size="large"
                    onClick={(e) => setMenuOpen(true)}
                >
                    <MenuIcon
                        sx={{
                            fontSize: "2rem",
                        }}
                    />
                </Button>
            </Box>
            <SideMenuDrawer handleMenu={{ menuOpen, setMenuOpen }} />
        </>
    ) : (
        <Box sx={{ width: "100%" }}>
            <Collapse in={scroll}>salam</Collapse>
        </Box>
    );
};

export default SuperMenu;
