import { Stack, Typography, TextField, Button } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import { useState, useEffect } from "react";

const VerifyStage = (props) => {
    const [formInput, setFormInput] = useState("");
    const [canResend, setCanResend] = useState(false);
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        if (countDown > 0)
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
        else setCanResend(true);
    }, [countDown]);

    return (
        <Stack spacing={1} sx={{ dispaly: "flex", alignItems: "center" }}>
            <SmsIcon sx={{ fontSize: "4rem" }} />
            <Typography variant="h6">اعتبارسنجی</Typography>
            <Typography
                variant="p"
                sx={{
                    fontSize: "0.8rem",
                    width: props.mobile ? "200px" : "300px",
                    textAlign: "justify",
                }}
            >
                کد تاییدی به شماره تلفن همراه شما ارسال شده است. لظفا برای ورود
                به پروفایل کاربری خود، آن را وارد کنید.
            </Typography>
            <TextField
                id="mytextfield"
                variant="standard"
                label="کد تایید"
                dir="ltr"
                fullWidth
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
            />
            <Button fullWidth variant="contained" onClick={props.handleSubmit}>
                تایید و ورود
            </Button>
            {!canResend ? (
                <Typography variant="p" sx={{ fontSize: "0.5rem", py: 1.5 }}>
                    <Stack direction="row" spacing={1}>
                        <span>مدت زمان باقیمانده تا ارسال مجدد پیامک:</span>
                        <span>{countDown}</span>
                    </Stack>
                </Typography>
            ) : (
                <Button fullWidth variant="text" onClick={props.handleExit}>
                    ارسال مجدد رمز یک بار مصرف
                </Button>
            )}
        </Stack>
    );
};

export default VerifyStage;
