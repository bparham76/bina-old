import {
    Box,
    Button,
    Stack,
    useScrollTrigger,
    Container,
    Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";

const MegaMenu = () => {
    const scroll = useScrollTrigger();
    const [menuOpen, setMenuOpen] = useState(false);

    const MenuButton = (props) => (
        <Button
            {...props}
            sx={{
                color: "black",
                transition: "all 500ms ease",
                alignItems: "center",
                pr: 4,
                "&:hover": { color: "red" },
            }}
        >
            {props.children}
        </Button>
    );

    useEffect(() => {
        setMenuOpen(false);
    }, [scroll]);

    return (
        <Collapse in={!scroll}>
            <Container sx={{ pt: 2, pb: 0 }}>
                <Stack>
                    <div>
                        <MenuButton
                            variant="text"
                            sx={{ color: "black" }}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="inline-block align-baseline">
                                <MenuIcon />
                                محصولات
                            </span>
                        </MenuButton>
                        <MenuButton>جشنواره</MenuButton>
                        <MenuButton>باشگاه مشتریان</MenuButton>
                    </div>
                    <Collapse in={menuOpen}>
                        <Box sx={{ height: 200, py: 2 }}>salam</Box>
                    </Collapse>
                </Stack>
            </Container>
        </Collapse>
    );
};

export default MegaMenu;
