import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Paper,
    Box,
    Fade,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";
import { useState } from "react";

const OrderHistory = () => {
    const [showDetails, setShowDetails] = useState(false);

    const OrderEntry = (props) => {
        const { index } = props;

        return (
            <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">
                    <Button
                        variant="outlined"
                        sx={{ px: 4 }}
                        onClick={(e) => setShowDetails(true)}
                    >
                        مشاهده
                    </Button>
                </TableCell>
            </TableRow>
        );
    };

    const OrderDetails = (props) => {
        return (
            <Fade in={showDetails}>
                <Paper
                    square
                    elevation={4}
                    sx={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        zIndex: 2000,
                        overflowY: "scroll",
                    }}
                    onClick={(e) => setShowDetails(false)}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        salam
                    </Box>
                </Paper>
            </Fade>
        );
    };

    const headCells = [
        "ردیف",
        "تاریخ ثبت",
        "شناسه سفارش",
        "مبلغ سفارش",
        "وضعیت سفارش",
        "جزئیات",
    ];
    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">تاریخچه سفارشات</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    تاریخچه سفارشات ثبت شده خود را می توانید در این بخش مشاهده
                    کنید و در صورت نیاز، اقدام به چاپ فاکتور و یا سفارش مجدد
                    نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart full>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headCells.map((item, index) => (
                                    <TableCell align="center" key={index}>
                                        {item}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...new Array(15)].map((item, index) => (
                                <OrderEntry key={index} index={index} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DashboardPagePart>
            {true && <OrderDetails />}
        </DashboardPage>
    );
};

export default OrderHistory;
