import { Stack, Typography, TextField, Button } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const LoginStage = (props) => {
    const { mobile } = props;

    const [formInput, setFormInput] = useState("");
    const [loading, setLoading] = useState(false);

    //input integrity controller
    const handleInput = (input) => {
        const reg = /^\d+\b$/;
        if ((reg.test(input) || input == "") && input.length < 12)
            setFormInput(input);
    };

    //submit button action
    const handleSubmit = async () => {};

    return (
        <Stack spacing={1} sx={{ dispaly: "flex", alignItems: "center" }}>
            <AdminPanelSettingsIcon sx={{ fontSize: "4rem" }} />
            <Typography variant="h6">ورود یا ثبت نام</Typography>
            <Typography
                variant="p"
                sx={{
                    fontSize: "0.8rem",
                    width: mobile ? "200px" : "300px",
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
                color="error"
                dir="ltr"
                fullWidth
                value={formInput}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button
                fullWidth
                color="error"
                variant="contained"
                disabled={formInput.length == 11 ? false : true}
                onClick={handleSubmit}
            >
                {!loading && "ارسال رمز یک بار مصرف"}
                {loading && (
                    <AutorenewIcon
                        sx={{
                            transition: "transform 1000ms",
                            animation: "spin 2s linear infinite",
                        }}
                    />
                )}
            </Button>
            <Button fullWidth variant="text" color="error">
                ورود پرسنل
            </Button>
            <Button fullWidth variant="text" color="error">
                بازگشت
            </Button>
        </Stack>
    );
};

export default LoginStage;
