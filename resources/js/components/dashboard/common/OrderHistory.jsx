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
import { useNavigate } from "react-router-dom";
import { useShop } from "../../../features/shop/ShopEcosystem";

const OrderHistory = () => {
    const navigate = useNavigate();
    const { orders, setOrders } = useShop();

    const OrderEntry = ({ index, id }) => {
        return (
            <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">{id}</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">salam</TableCell>
                <TableCell align="center">
                    <Button
                        variant="outlined"
                        sx={{
                            px: 4,
                            color: "lightcoral",
                            borderColor: "lightcoral",
                            "&:hover": {
                                color: "white",
                                borderColor: "lightcoral",
                                bgcolor: "lightcoral",
                            },
                        }}
                        onClick={(e) =>
                            navigate("/dashboard/order-history/show")
                        }
                    >
                        مشاهده
                    </Button>
                </TableCell>
            </TableRow>
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
                            {orders.map((item, index) => (
                                <OrderEntry
                                    key={index}
                                    index={index}
                                    id={item.id}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default OrderHistory;
