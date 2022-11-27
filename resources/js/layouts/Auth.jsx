import { Paper, Stack, Alert, Snackbar, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import LoginStage from "../components/auth/LoginStage";
import VerifyStage from "../components/auth/VerifyStage";
import { useReducer, useEffect } from "react";
import { authData, authDataReducer } from "../features/Auth";

export const Auth = () => {
    const mobile = useMediaQuery("(max-width: 600px)");

    const [auth, authDispatch] = useReducer(authDataReducer, authData);

    useEffect(() => {
        console.table(auth);
        // if (auth.error !== 0)
        //     setTimeout(() => {
        //         authDispatch({ type: "clear_error" });
        //     }, 5000);
    }, [auth]);

    return (
        <>
            <Paper
                elevation={4}
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    width: mobile ? "300px" : "450px",
                    m: 0,
                    p: 0,
                    py: 4,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack>
                    <div>
                        {auth.stage === 0 && (
                            <LoginStage
                                mobile={mobile}
                                dispatch={authDispatch}
                            />
                        )}
                        {auth.stage === 1 && (
                            <VerifyStage
                                mobile={mobile}
                                phone={auth.phone}
                                dispatch={authDispatch}
                            />
                        )}
                    </div>
                    <div>
                        {/* {auth.error === 1 && (
                            <Snackbar
                                open={auth.error === 1}
                                autoHideDuration={2000}
                            >
                                <Alert severity="error">خطا! کد مورد نظر</Alert>
                            </Snackbar>
                        )}
                        {auth.error === 2 && (
                            <Alert severity="error">خطا! کد مورد نظر</Alert>
                        )}
                        {auth.error === 3 && (
                            <Alert severity="error">خطا! کد مورد نظر</Alert>
                        )}
                        {auth.error === 4 && (
                            <Alert severity="error">خطا! کد مورد نظر</Alert>
                        )} */}
                    </div>
                </Stack>
            </Paper>
            <Snackbar
                open={auth.error != 0}
                autoHideDuration={4000}
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                onClose={() => {
                    authDispatch({ type: "clear_error" });
                }}
            >
                <Alert severity="error">خطا! کد {auth.error}</Alert>
            </Snackbar>
            <Footer stickToBottom />
        </>
    );
};
