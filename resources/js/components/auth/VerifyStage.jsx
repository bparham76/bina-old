import { Stack, Typography, TextField, Button } from "@mui/material";
import SmsIcon from "@mui/icons-material/Sms";
import { useState, useEffect } from "react";
import { useFetch } from "use-http";

const VerifyStage = (props) => {
    const { mobile, phone, dispatch, ...others } = props;

    const [formInput, setFormInput] = useState("");
    const [canResend, setCanResend] = useState(false);
    const [countDown, setCountDown] = useState(20);
    const { response, get, loading, error } = useFetch("/api");

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
    const handleSubmit = async () => {
        const result = await get(
            `/verifycode?phone=${phone}&code=${formInput}`
        );
        if (response.ok) {
            console.table(result);
            switch (response.status) {
                case "200":
                    if (result.action == 1) dispatch({ type: "" });
                    else dispatch({ type: "" });
                    break;
                case "404":
                    dispatch({ type: "" });
                    break;
                case "401":
                    dispatch({ type: "" });
                    break;
                default:
                    break;
            }
        }
    };

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
                variant="standard"
                label="کد تایید"
                dir="ltr"
                fullWidth
                value={formInput}
                onChange={(e) => handleInput(e.target.value)}
            />
            <Button
                fullWidth
                color="error"
                variant="contained"
                disabled={formInput.length == 6 ? false : true}
                onClick={handleSubmit}
            >
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
                <Button fullWidth variant="text" color="error">
                    ارسال مجدد رمز یک بار مصرف
                </Button>
            )}
        </Stack>
    );
};

export default VerifyStage;
