import { Paper, Stack, useMediaQuery } from "@mui/material";
import LoginStage from "../components/auth/LoginStage";
import VerifyStage from "../components/auth/VerifyStage";
import { useAuthStage } from "../features/auth/AuthEcosystem";

const Authentication = () => {
    const mobile = useMediaQuery("(max-width: 600px)");
    const authStage = useAuthStage();
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
