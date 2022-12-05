import { Drawer, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MobileDrawer = (props) => {
    const { anchor, open, onClick, children, ...others } = props;

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
    );
};

export default MobileDrawer;
