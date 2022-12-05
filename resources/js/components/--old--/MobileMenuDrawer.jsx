import MobileDrawer from "./MobileDrawer";
import { Grid, Box, Typography } from "@mui/material";

const MobileMenuDrawer = (props) => {
    const { show, onClose, ...others } = props;

    return (
        <MobileDrawer anchor="right" open={show} onClick={onClose} {...others}>
            <Grid
                container
                sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="p" fontSize="1.5rem">
                        دسته بندی محصولات
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "90%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                ></Box>
            </Grid>
        </MobileDrawer>
    );
};

export default MobileMenuDrawer;
