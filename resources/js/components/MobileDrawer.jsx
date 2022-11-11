import { Drawer } from "@mui/material";

const MobileDrawer = (props) => {
    const { anchor, open, onClick, children, ...others } = props;

    return (
        <Drawer
            open={open}
            onClick={onClick}
            anchor={anchor}
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
            {children}
        </Drawer>
    );
};

export default MobileDrawer;
