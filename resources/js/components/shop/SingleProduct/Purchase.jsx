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
            <Grid item xs={12} sm={mobile ? 6 : 12}>
                <Stack direction="row" spacing={1}>
                    <TextField
                        sx={{ width: "90%" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    تعداد
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    واحد
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button sx={{ width: "10%" }} variant="outlined" fullWidth>
                        <BookmarkAdd />
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={12} sm={mobile ? 6 : 12}>
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
