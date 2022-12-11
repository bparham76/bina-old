import { Button, useMediaQuery } from "@mui/material";

const DashboardMenuButton = (props) => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const { children, ...others } = props;
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
