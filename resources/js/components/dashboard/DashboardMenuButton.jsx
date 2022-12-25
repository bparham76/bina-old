import { Button, useMediaQuery } from "@mui/material";

const DashboardMenuButton = ({ children, ...others }) => {
    const mobile = useMediaQuery("(max-width: 800px)");

    return (
        <Button
            {...others}
            variant={mobile ? "text" : "contained"}
            disableRipple
            disableFocusRipple
            sx={() => {
                if (!mobile)
                    return {
                        py: 1,
                        px: 2,
                        my: 0.5,
                        bgcolor: "lightcoral",
                    };
                else return { color: "lightcoral" };
            }}
        >
            {children}
        </Button>
    );
};

export default DashboardMenuButton;
