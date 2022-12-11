import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import { Typography, Button, TextField } from "@mui/material";

const NewAddress = () => {
    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">افزودن نشانی جدید</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    از این بخش می توانین نشانی جدیدی به منظور دریافت سفارش و
                    فاکتور خود ثبت نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField />
                <TextField />
                <TextField />
                <Button variant="contained">salam</Button>
            </DashboardPagePart>
            <DashboardPagePart></DashboardPagePart>
            <DashboardPagePart></DashboardPagePart>
        </DashboardPage>
    );
};

export default NewAddress;
