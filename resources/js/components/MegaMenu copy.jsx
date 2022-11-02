import {
    Paper,
    Button,
    Slide,
    useScrollTrigger,
    Container,
    Collapse,
    // Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Box } from "@mui/system";

const MegaMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const HideOnScroll = (props) => {
        const trigger = useScrollTrigger();

        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {props.children}
            </Slide>
        );
    };

    return (
        <>
            <HideOnScroll>
                <Paper square elevation={4} sx={{ pt: 1, zIndex: 900 }}>
                    <Container>
                        <Button
                            variant="text"
                            sx={{ color: "black" }}
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <span className="inline-block align-baseline">
                                <MenuIcon />
                                محصولات
                            </span>
                        </Button>
                    </Container>
                </Paper>
            </HideOnScroll>
            <Paper square elevation={5}>
                <Collapse orientation="vertical" in={openMenu}>
                    <Container sx={{ p: 2, height: 200 }}>
                        Salam dickhead
                    </Container>
                </Collapse>
            </Paper>
            {/* <Drawer
                open={openMenu}
                anchor="right"
                PaperProps={{ style: { left: "unset", right: 0, width: 300 } }}
                onClick={() => setOpenMenu(false)}
            >
                shit
            </Drawer> */}
        </>
    );
};

export default MegaMenu;
