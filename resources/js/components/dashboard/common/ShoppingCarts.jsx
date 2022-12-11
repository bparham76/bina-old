import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Typography,
    Grid,
    Card,
    Box,
    Button,
    Table,
    TableBody,
    TableRow,
    TableCell,
    useMediaQuery,
} from "@mui/material";
import { PlaylistAdd } from "@mui/icons-material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCarts = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const navigate = useNavigate();

    const CartEntry = () => {
        const [hover, setHover] = useState(false);

        return (
            <Card
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                elevation={hover ? 8 : 4}
                sx={{
                    cursor: "pointer",
                    p: 1,
                    height: 250,
                    width: mobile ? "100%" : 250,
                    transition: "all 200ms ease",
                }}
                onClick={(e) => navigate("/dashboard/carts/show")}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <ShoppingBagIcon
                        sx={{ fontSize: "4rem", color: "lightcoral" }}
                    />
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ border: "none" }}>
                                    عنوان:
                                </TableCell>
                                <TableCell
                                    sx={{ border: "none" }}
                                    align="center"
                                >
                                    عنوان سبد خرید
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ border: "none" }}>
                                    شماره سبد:
                                </TableCell>
                                <TableCell
                                    sx={{ border: "none" }}
                                    align="center"
                                >
                                    crt1254522362
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ border: "none" }}>
                                    تعداد اقلام:
                                </TableCell>
                                <TableCell
                                    sx={{ border: "none" }}
                                    align="center"
                                >
                                    1
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button
                        variant="text"
                        endIcon={<DeleteForeverIcon />}
                        sx={{ color: "lightcoral", p: 2 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        حذف سبد
                    </Button>
                </Box>
            </Card>
        );
    };

    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">سبد های خرید</Typography>
            </DashboardPagePart>
            <DashboardPagePart mdSize={6}>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    در این صفحه می توانید چندین سبد خرید مجزا تعریف کرده و تاریخ
                    تسویه و دریافت سفارشات خود را بصورت جداگانه مدیریت نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart mdSize={6}>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            p: 2,
                            width: mobile ? "100%" : "50%",
                            color: "lightcoral",
                            borderColor: "lightcoral",
                            "&:hover": { borderColor: "lightcoral" },
                        }}
                        endIcon={<PlaylistAdd />}
                    >
                        افزودن سبد جدید
                    </Button>
                </Box>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Grid container gap={2} sx={{ py: 2 }}>
                    {[...new Array(4)].map((item, index) => (
                        <CartEntry key={index} />
                    ))}
                </Grid>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default ShoppingCarts;
