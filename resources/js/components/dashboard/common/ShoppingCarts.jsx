import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import { Typography } from "@mui/material";

const ShoppingCarts = () => {
    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">سبد های خرید</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    اطلاعات هویتی، مالی و حقوقی مربوط به خود را در این صفحه
                    مشاهده و در صورت لزوم ویرایش نمایید.
                </Typography>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default ShoppingCarts;
