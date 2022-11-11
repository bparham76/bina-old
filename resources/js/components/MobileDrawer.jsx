import { Drawer, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MobileDrawer = (props) => {
    const { anchor, open, onClick, showCloseButton, children, ...others } =
        props;

    return (
        <Drawer
            {...others}
            open={open}
            anchor={anchor}
            onClose={onClick}
            PaperProps={{
                style: {
                    left: anchor === "right" ? "unset" : 0,
                    right: anchor === "right" ? 0 : "unset",
                    height:
                        anchor === "top" || anchor === "bottom"
                            ? "80vh"
                            : "100vh",
                    width:
                        anchor === "left" || anchor === "right"
                            ? "80vw"
                            : "100vw",
                },
            }}
        >
            {showCloseButton && (
                <Button
                    onClick={onClick}
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: anchor === "right" ? 0 : "unset",
                        left: anchor === "left" ? 0 : "unset",
                        margin: 1,
                        padding: 2,
                    }}
                >
                    <CloseIcon sx={{ color: "black", fontSize: "2rem" }} />
                </Button>
            )}
            {children}
        </Drawer>
    );
};

export default MobileDrawer;
