import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";

const OrderHistory = () => {
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
                                <TableCell align="center">ردیف</TableCell>
                                <TableCell align="center">تاریخ ثبت</TableCell>
                                <TableCell align="center">
                                    شناسه سفارش
                                </TableCell>
                                <TableCell align="center">مبلغ سفارش</TableCell>
                                <TableCell align="center">
                                    وضعیت سفارش
                                </TableCell>
                                <TableCell align="center">جزئیات</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[...new Array(15)].map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell align="center">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">salam</TableCell>
                                    <TableCell align="center">salam</TableCell>
                                    <TableCell align="center">salam</TableCell>
                                    <TableCell align="center">salam</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            sx={{ px: 4 }}
                                        >
                                            مشاهده
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default OrderHistory;
