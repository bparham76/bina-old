import { useState } from "react";
import { Paper, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";
import LoginStage from "../components/auth/LoginStage";
import VerifyStage from "../components/auth/VerifyStage";

export const Auth = (props) => {
    const [stage, setStage] = useState(0);
    const mobile = useMediaQuery("(max-width: 600px)");

    const handleSubmit = (s) => {
        setStage(s);
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
                {stage == 0 && (
                    <LoginStage
                        mobile={mobile}
                        handleExit={handleExit}
                        handleSubmit={(e) => handleSubmit(1)}
                    />
                )}
                {stage == 1 && (
                    <VerifyStage
                        mobile={mobile}
                        handleExit={(e) => handleSubmit(0)}
                        handleSubmit={(e) => handleSubmit(0)}
                    />
                )}
            </Paper>
            <Footer stickToBottom />
        </>
    );
};
