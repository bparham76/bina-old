import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, Fab, Stack, Paper, Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ComponentPopper from "../general/ComponentPopper";
import {
    useUserData,
    useAuthenticate,
} from "../../features/auth/AuthEcosystem";

import AccountantMenu from "./accountant/AccountantMenu";
import CustomerMenu from "./customer/CustomerMenu";
import MarketerMenu from "./marketer/MarketerMenu";
import SupervisorMenu from "./supervisor/SupervisorMenu";

const DashboardMenu = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useAuthenticate();
    const userData = useUserData();

    const menuButtonClick = (address) => {
        navigate("/dashboard/" + address);
        setDrawerOpen(false);
    };

    const Menu = () => (
        <Stack
            spacing={mobile ? 2 : 0}
            sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                p: mobile ? 0 : 2,
            }}
        >
            {userData.role == 0 ? (
                <CustomerMenu onSelect={menuButtonClick} />
            ) : userData.role == 1 ? (
                <MarketerMenu onSelect={menuButtonClick} />
            ) : userData.role == 2 ? (
                <AccountantMenu onSelect={menuButtonClick} />
            ) : userData.role == 3 ? (
                <SupervisorMenu onSelect={menuButtonClick} />
            ) : null}
            <Button onClick={logout}>خروج از حساب کاربری</Button>
        </Stack>
    );

    useEffect(() => {
        setDrawerOpen(false);
    }, [mobile]);

    if (mobile)
        return (
            <>
                <Fab
                    variant="circular"
                    color="primary"
                    size="large"
                    sx={{
                        m: 2,
                        bottom: 0,
                        right: 0,
                        position: "fixed",
                    }}
                    onClick={() => {
                        setDrawerOpen(true);
                    }}
                >
                    <DashboardIcon />
                </Fab>
                <Paper>
                    <ComponentPopper
                        open={drawerOpen}
                        anchor="bottom"
                        autoHeight
                        onClick={() => setDrawerOpen(false)}
                    >
                        <Menu />
                    </ComponentPopper>
                </Paper>
            </>
        );

    return <Menu />;
};

export default DashboardMenu;
