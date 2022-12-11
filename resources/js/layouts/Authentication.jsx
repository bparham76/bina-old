import { Paper, Stack, useMediaQuery } from "@mui/material";
import LoginStage from "../components/auth/LoginStage";
import VerifyStage from "../components/auth/VerifyStage";
import { useAuthStage, useAuthenticate } from "../features/auth/AuthEcosystem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Authentication = () => {
    const mobile = useMediaQuery("(max-width: 600px)");
    const authStage = useAuthStage();
    const { authenticated, loading } = useAuthenticate();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading & authenticated) navigate("/dashboard");
    }, [authenticated, loading]);

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
                        {authStage == 0 && <LoginStage mobile={mobile} />}
                        {authStage == 1 && <VerifyStage mobile={mobile} />}
                    </div>
                </Stack>
            </Paper>
        </>
    );
};

export default Authentication;
