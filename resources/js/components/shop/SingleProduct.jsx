import { Grid, Stack, Paper, Box, useMediaQuery } from "@mui/material";
import ImageSlider from "./SingleProduct/ImageSlider";
import Purchase from "./SingleProduct/Purchase";

const SingleProduct = ({ productId }) => {
    const mobile = useMediaQuery("(max-width: 800px)");
    // return;
    return (
        <Box sx={{ width: "100%", p: mobile ? 0 : 3 }}>
            <Stack direction="column" spacing={2}>
                <Paper sx={{ p: 2 }} elevation={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <ImageSlider
                                mobile={mobile}
                                productId={productId}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={2}
                            direction="column"
                            xs={12}
                            md={4}
                            justifyContent="space-around"
                        >
                            <Grid item>[Title]</Grid>
                            <Grid item>[Brief]</Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            spacing={2}
                            direction="column"
                            xs={12}
                            md={4}
                        >
                            <Grid item>
                                <Purchase mobile={mobile} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                {[...new Array(10)].map((item, index) => (
                    <Paper key={index} sx={{ p: 2 }} elevation={8}>
                        <Box>
                            <Box
                                sx={{
                                    position: "sticky",
                                    top: 50,
                                    bgcolor: "white",
                                    p: 5,
                                }}
                            >
                                200
                            </Box>
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                            sometext <br />
                        </Box>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};

export default SingleProduct;
