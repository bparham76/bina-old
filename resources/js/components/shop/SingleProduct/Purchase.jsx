import React from "react";
import {
    Button,
    ButtonGroup,
    InputAdornment,
    Grid,
    Stack,
    Box,
    TextField,
    Fab,
    SwipeableDrawer,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { ShoppingCart, BookmarkAdd } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Purchase = ({ mobile }) => {
    const MenuBreakPoint = useMediaQuery("(max-width: 600px)");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [orderCount, setOrderCount] = useState(1);

    const ActionButtons = () => (
        <Stack spacing={2} sx={{ p: 2 }}>
            <Button
                sx={{ p: 2 }}
                variant="outlined"
                color="error"
                size="large"
                fullWidth
                endIcon={<BookmarkAdd />}
            >
                افزودن به علاقه مندی
            </Button>
            <ButtonGroup fullWidth>
                <Button
                    onClick={(e) => setOrderCount(orderCount + 1)}
                    sx={{ width: "35%" }}
                >
                    <AddIcon />
                </Button>
                <TextField
                    value={orderCount}
                    type="number"
                    InputProps={{
                        readOnly: true,
                        inputProps: { style: { textAlign: "center" } },
                        startAdornment: (
                            <InputAdornment position="start">
                                تعداد
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    onClick={(e) =>
                        orderCount > 1 && setOrderCount(orderCount - 1)
                    }
                    sx={{ width: "35%" }}
                >
                    <RemoveIcon />
                </Button>
            </ButtonGroup>
            <Button
                sx={{ p: 2 }}
                variant="contained"
                color="error"
                size="large"
                fullWidth
                endIcon={<ShoppingCart />}
            >
                افزودن به سبد خرید
            </Button>
        </Stack>
    );

    const BillingInfo = () => <Box sx={{ p: 2 }}>Product Price</Box>;

    if (mobile)
        return (
            <>
                <BillingInfo />
                <Fab
                    variant="circular"
                    color="error"
                    sx={{ position: "fixed", bottom: 0, right: 0, m: 2 }}
                    onClick={(e) => setDrawerOpen(true)}
                >
                    <AddIcon />
                </Fab>
                <SwipeableDrawer
                    open={drawerOpen}
                    anchor="bottom"
                    onOpen={(e) => setDrawerOpen(true)}
                    onClose={(e) => setDrawerOpen(false)}
                    PaperProps={{
                        style: {
                            marginLeft: !MenuBreakPoint && "auto",
                            marginRight: !MenuBreakPoint && "auto",
                            width: MenuBreakPoint ? "100%" : "60%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        },
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <ActionButtons />
                    </Box>
                </SwipeableDrawer>
            </>
        );

    return (
        <>
            <BillingInfo />
            <ActionButtons />
        </>
    );
};

export default Purchase;
