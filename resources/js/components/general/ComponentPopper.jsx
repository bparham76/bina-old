import { useState, useEffect } from "react";
import {
    Box,
    Paper,
    Fade,
    Backdrop,
    Drawer,
    useMediaQuery,
} from "@mui/material";

const ComponentPopper = (props) => {
    const { anchor, open, onClick, children, ...otherProps } = props;
    const mobileScreen = useMediaQuery("(max-width: 450px)");

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
                            height:
                                anchor === "top" || anchor === "bottom"
                                    ? "90vh"
                                    : "100vh",
                            width:
                                anchor === "left" || anchor === "right"
                                    ? "90vw"
                                    : "100vw",
                        },
                    }}
                >
                    {children}
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
                                    width: "90vw",
                                    height: "90vh",
                                    p: 2,
                                }}
                            >
                                {children}
                            </Paper>
                        </Box>
                    </Backdrop>
                </Fade>
            )}
        </>
    );
};

export default ComponentPopper;
