import { Paper, Stack, Alert, Snackbar, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import LoginStage from "../components/auth/LoginStage";
import VerifyStage from "../components/auth/VerifyStage";

const Authentication = () => {
    const mobile = useMediaQuery("(max-width: 600px)");

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
                        {true && <LoginStage mobile={mobile} />}
                        {false && <VerifyStage mobile={mobile} />}
                    </div>
                </Stack>
            </Paper>
            <Footer stickToBottom />
        </>
    );
};

export default Authentication;
