import { Stack, Typography, TextField, Button } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useState } from "react";
import { useFetch } from "use-http";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const LoginStage = (props) => {
    const { mobile, dispatch, ...others } = props;

    const [formInput, setFormInput] = useState("");
    const { response, post, get, loading, error } = useFetch("/api");

    //input integrity controller
    const handleInput = (input) => {
        const reg = /^\d+\b$/;
        if ((reg.test(input) || input == "") && input.length < 12)
            setFormInput(input);
    };

    //submit button action
    const handleSubmit = async () => {
        const result = await get("/sendcode?phone=" + formInput);
        // const result = await post("/test");

        // if (result == null) console.log(error);
        // else console.log(result.code);

        if (response.ok) {
            if (response.status === 200)
                dispatch({ type: "phone_sent_success", phone: formInput });
            else {
                dispatch({ type: "phone_sent_fail_network" });
            }
        } else {
            dispatch({ type: "phone_sent_fail_network" });
        }
    };

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
