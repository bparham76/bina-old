import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import { Typography } from "@mui/material";

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
        </DashboardPage>
    );
};

export default OrderHistory;
