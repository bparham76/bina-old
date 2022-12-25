import {
    useMediaQuery,
    useScrollTrigger,
    Collapse,
    Box,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useShop } from "../../../features/shop/ShopEcosystem";

const SuperMenu = () => {
    const mediumScreen = useMediaQuery("(max-width: 900px)");
    const scroll = useScrollTrigger();

    const { setSideMenuOpen } = useShop();
    const openMenu = () => setSideMenuOpen(true);

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
                    }}
                    size="large"
                    onClick={openMenu}
                >
                    <MenuIcon
                        sx={{
                            fontSize: "2rem",
                        }}
                    />
                </Button>
            </Box>
        </>
    ) : (
        <Box sx={{ width: "100%" }}>
            <Collapse in={scroll}>salam</Collapse>
        </Box>
    );
};

export default SuperMenu;
