import MobileDrawer from "./MobileDrawer";
import { Grid, Stack, Box, Button, Typography } from "@mui/material";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ImageIcon from "@mui/icons-material/Image";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";

const ShoppingCartDrawer = (props) => {
    const { show, onClose, ...others } = props;

    const [authState, setAuthState] = useState(false);

    const NotLoggedIn = () => {
        const nlgButton = () => setAuthState(true); //(window.location.href = "/login");

        return (
            <Grid
                container
                sx={{ width: "100%", height: "100%", p: 2 }}
                alignItems="center"
                justifyContent="center"
                spacing={0}
                rowSpacing={0}
            >
                <Grid item container justifyContent="center">
                    <FeedbackIcon
                        sx={{ color: "blueviolet", fontSize: "4rem" }}
                    />
                    <Typography variant="p" color="CaptionText" sx={{ my: 2 }}>
                        برای ثبت محصولات در سبد خرید ابتدا باید وارد شوید.
                    </Typography>
                    <Button onClick={nlgButton} variant="contained">
                        ورود یا ثبت نام
                    </Button>
                </Grid>
            </Grid>
        );
    };

    const LoggedIn = () => {
        const CartItem = () => {
            return (
                <Box
                    sx={{
                        borderBottomWidth: 1,
                        display: "flex",
                        mb: 1,
                        pb: 1,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <ImageIcon sx={{ fontSize: "3rem" }} />
                    <Stack>
                        <Typography>عنوان محصول</Typography>
                        <Typography>10.000.000 تومان</Typography>
                    </Stack>
                    <Button sx={{ color: "red" }}>
                        <DeleteForeverIcon />
                    </Button>
                </Box>
            );
        };

        return (
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
                        سبد خرید
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "80%",
                        overflow: "scroll",
                    }}
                >
                    {[...new Array(5)].map((item, idx) => (
                        <CartItem key={idx} />
                    ))}
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "10%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Stack>
                        <Typography fontSize="1rem">مجموع</Typography>
                        <Typography fontSize="1rem">100.000.000</Typography>
                    </Stack>
                    <Button variant="contained" size="medium" sx={{ px: 4 }}>
                        تسویه حساب
                    </Button>
                </Box>
            </Grid>
        );
    };

    return (
        <MobileDrawer anchor="left" open={show} onClick={onClose} {...others}>
            {authState ? <LoggedIn /> : <NotLoggedIn />}
        </MobileDrawer>
    );
};

export default ShoppingCartDrawer;
