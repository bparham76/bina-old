import { Stack, Typography, TextField, Button } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import { useState, useEffect } from "react";
import { useAuthenticate } from "../../features/auth/AuthEcosystem";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyStage = (props) => {
    const { mobile } = props;

    const [formInput, setFormInput] = useState("");
    const [canResend, setCanResend] = useState(false);
    const [countDown, setCountDown] = useState(120);

    const { loading, error, verifyCode, resendCode, abortAuth } =
        useAuthenticate();

    const navigate = useNavigate();

    //input integrity controller
    const handleInput = (input) => {
        const reg = /^\d+\b$/;
        if ((reg.test(input) || input == "") && input.length < 7)
            setFormInput(input);
    };

    //count down
    useEffect(() => {
        if (countDown > 0)
            setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000);
        else setCanResend(true);
    }, [countDown]);

    //submit button action
    const handleSubmit = () => {
        if (!loading & (formInput.length == 6)) verifyCode(formInput);
    };

    useEffect(() => {
        if (!loading & (error == 2)) {
            toast("کد وارد شده صحیح نیست.", { type: "error" });
        } else if (!loading & (error == 3)) {
            toast("مدت زمان اعتبار کد وارد شده به اتمام رسیده است.", {
                type: "error",
            });
        }
        // else if (!loading & authenticated) {
        //     toast("با موفقیت وارد شدید.", { type: "success" });
        // }
    }, [loading]);

    return (
        <Stack spacing={1} sx={{ dispaly: "flex", alignItems: "center" }}>
            <SmsIcon sx={{ fontSize: "4rem" }} />
            <Typography variant="h6">اعتبارسنجی</Typography>
            <Typography
                variant="p"
                sx={{
                    fontSize: "0.8rem",
                    width: mobile ? "200px" : "300px",
                    textAlign: "justify",
                }}
            >
                کد تاییدی به شماره تلفن همراه شما ارسال شده است. لظفا برای ورود
                به پروفایل کاربری خود، آن را وارد کنید.
            </Typography>
            <TextField
                id="mytextfield"
                variant="outlined"
                label="کد تایید"
                dir="ltr"
                fullWidth
                value={formInput}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button
                fullWidth
                color="primary"
                variant="contained"
                disabled={formInput.length == 6 ? false : true}
                onClick={handleSubmit}
            >
                {!loading && "تایید و ورود"}
                {loading && (
                    <AutorenewIcon
                        sx={{
                            transition: "transform 1000ms",
                            animation: "spin 2s linear infinite",
                        }}
                    />
                )}
            </Button>
            {!canResend ? (
                <Typography variant="p" sx={{ fontSize: "0.5rem", py: 1.5 }}>
                    <Stack direction="row" spacing={1}>
                        <span>مدت زمان باقیمانده تا ارسال مجدد پیامک:</span>
                        <span>
                            {Math.trunc(countDown / 60)}:{countDown % 60}
                        </span>
                    </Stack>
                </Typography>
            ) : (
                <Button
                    fullWidth
                    variant="text"
                    color="primary"
                    onClick={resendCode}
                >
                    ارسال مجدد رمز یک بار مصرف
                </Button>
            )}
            <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={() => {
                    abortAuth();
                    navigate("/");
                }}
            >
                بازگشت
            </Button>
        </Stack>
    );
};

export default VerifyStage;
