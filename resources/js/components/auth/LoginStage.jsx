import { Stack, Typography, TextField, Button } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";

const LoginStage = (props) => {
    const [formInput, setFormInput] = useState("");

    return (
        <Stack spacing={1} sx={{ dispaly: "flex", alignItems: "center" }}>
            <AdminPanelSettingsIcon sx={{ fontSize: "4rem" }} />
            <Typography variant="h6">ورود یا ثبت نام</Typography>
            <Typography
                variant="p"
                sx={{
                    fontSize: "0.8rem",
                    width: props.mobile ? "200px" : "300px",
                    textAlign: "justify",
                }}
            >
                سلام. <br /> لطفا برای ورود به حساب کاربری یا ایجاد یک حساب
                جدید، شماره تلفن همراه خود را وارد کنید.
            </Typography>
            <TextField
                id="mytextfield"
                variant="standard"
                label="تلفن همراه"
                dir="ltr"
                fullWidth
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
            />
            <Button fullWidth variant="contained" onClick={props.handleSubmit}>
                ارسال رمز یک بار مصرف
            </Button>
            <Button fullWidth variant="text">
                ورود پرسنل
            </Button>
            <Button fullWidth variant="text" onClick={props.handleExit}>
                بازگشت
            </Button>
        </Stack>
    );
};

export default LoginStage;
