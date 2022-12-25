import { useState } from "react";
import {
    Box,
    Paper,
    Fade,
    Backdrop,
    Drawer,
    useMediaQuery,
} from "@mui/material";

const ComponentPopper = (props) => {
    const {
        anchor,
        open,
        onClick,
        autoHeight,
        fullScreen,
        children,
        ...otherProps
    } = props;
    const mobileScreen = useMediaQuery("(max-width: 800px)");

    const [mouseOnFadeComponent, setMouseOnFadeComponent] = useState(false);
    const handleFadeClick = () => {
        if (!mouseOnFadeComponent) onClick();
    };

    return (
        <>
            {mobileScreen ? (
                <Drawer
                    {...otherProps}
                    open={open}
                    anchor={anchor}
                    onClose={onClick}
                    PaperProps={{
                        style: {
                            left: anchor === "right" ? "unset" : 0,
                            right: anchor === "right" ? 0 : "unset",
                            height: fullScreen
                                ? "100vh"
                                : autoHeight
                                ? ""
                                : anchor === "top" || anchor === "bottom"
                                ? "80vh"
                                : "100vh",
                            width: fullScreen
                                ? "100vw"
                                : anchor === "left" || anchor === "right"
                                ? "80vw"
                                : "100vw",
                        },
                    }}
                >
                    <Box sx={{ p: 2 }}>{children}</Box>
                </Drawer>
            ) : (
                <Fade in={open} onClick={handleFadeClick}>
                    <Backdrop open={open}>
                        <Box
                            sx={{
                                position: "fixed",
                                height: "100vh",
                                width: "100vw",
                                top: 0,
                                left: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Paper
                                onMouseEnter={(e) =>
                                    setMouseOnFadeComponent(true)
                                }
                                onMouseLeave={(e) =>
                                    setMouseOnFadeComponent(false)
                                }
                                elevation={6}
                                sx={{
                                    width: fullScreen ? "95vw" : "60vw",
                                    height: fullScreen ? "95vh" : "80vh",
                                }}
                                style={{
                                    zIndex: 2000,
                                }}
                            >
                                <Box sx={{ p: 2 }}>{children}</Box>
                            </Paper>
                        </Box>
                    </Backdrop>
                </Fade>
            )}
        </>
    );
};

export default ComponentPopper;
