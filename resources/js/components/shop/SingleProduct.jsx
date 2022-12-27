import { Grid, Stack, Button, Box, useMediaQuery } from "@mui/material";
import ImageSlider from "./SingleProduct/ImageSlider";
import Purchase from "./SingleProduct/Purchase";
import { ShoppingCart, BookmarkAdd } from "@mui/icons-material";

const SingleProduct = ({ productId }) => {
    const mobile = useMediaQuery("(max-width: 900px)");

    return (
        <Grid container spacing={2} sx={{ width: "100%", p: mobile ? 2 : 4 }}>
            <Grid item container xs={12} md={9} spacing={mobile ? 4 : 2}>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            position: "sticky",
                            top: mobile ? 20 : 120,
                        }}
                    >
                        <ImageSlider mobile={mobile} productId={productId} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ p: mobile ? 2 : 0 }}>
                    <Stack>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                        <div>salam</div>
                    </Stack>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box
                    sx={
                        !mobile
                            ? {
                                  position: "sticky",
                                  top: 120,
                              }
                            : {}
                    }
                >
                    <Purchase mobile={mobile} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default SingleProduct;
