import React from "react";
import {
    Button,
    InputAdornment,
    Grid,
    Stack,
    Box,
    TextField,
} from "@mui/material";
import { ShoppingCart, BookmarkAdd } from "@mui/icons-material";
import useServer from "../../../features/useServer";

const Purchase = ({ mobile, productId }) => {
    const { loading, response, error, sendRequest } = useServer();

    // return;
    const PropertySelector = () => {};

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Box sx={{ height: "200px" }}>
                    <Stack>
                        <h1>salam</h1>
                        <h1>salam</h1>
                    </Stack>
                </Box>
            </Grid>
            <Grid item xs={7}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                تعداد
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">واحد</InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={5}>
                <Button
                    variant="outlined"
                    fullWidth
                    sx={{ height: "100%" }}
                    endIcon={<BookmarkAdd />}
                >
                    نشانه گذاری
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    sx={{ height: "50px" }}
                    endIcon={<ShoppingCart />}
                >
                    افزودن به سبد خرید
                </Button>
            </Grid>
        </Grid>
    );
};

export default Purchase;
