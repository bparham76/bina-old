import { useState } from "react";
import { Grid, Box, Paper, Button, TextField } from "@mui/material";
import Footer from "../components/Footer";
import Logo from "../../image/logo.png";

export const Login = (props) => {
    const [formInput, setFormInput] = useState("");

    const handleSubmit = () => {
        alert(formInput);
    };

    const handleExit = () => {
        if (typeof props.onCancel == "function") {
            props.onCancel();
        } else {
            window.location.href = "/";
        }
    };

    return (
        <>
            <Box className="p-0 m-0 w-screen h-screen bg-white">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className="w-full h-full"
                >
                    <Grid item>
                        <Paper elevation={2}>
                            <Box className="p-8 w-[300px]">
                                <Grid
                                    container
                                    rowSpacing={1}
                                    className="w-full"
                                >
                                    <Grid item className="w-full">
                                        <div className="flex justify-center">
                                            <img src={Logo} alt="bina logo" />
                                        </div>
                                    </Grid>
                                    <Grid item className="w-full">
                                        <h1 className="w-full text-center font-bold text-xl py-5">
                                            ورود یا ثبت نام
                                        </h1>
                                        <TextField
                                            id="mytextfield"
                                            variant="standard"
                                            label="ایمیل یا شماره تلفن همراه"
                                            dir="ltr"
                                            fullWidth
                                            value={formInput}
                                            onChange={(e) =>
                                                setFormInput(e.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid item className="w-full">
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            onClick={handleSubmit}
                                        >
                                            ارسال رمز یک بار مصرف
                                        </Button>
                                    </Grid>
                                    <Grid item className="w-full">
                                        <Button
                                            fullWidth
                                            variant="text"
                                            onClick={handleExit}
                                        >
                                            بازگشت
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer stickToBottom />
            </Box>
        </>
    );
};
