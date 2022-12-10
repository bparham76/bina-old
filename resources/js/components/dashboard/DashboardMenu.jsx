import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, Fab, Stack, Paper, Button } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ComponentPopper from "../general/ComponentPopper";
import {
    useUserData,
    useAuthenticate,
} from "../../features/auth/AuthEcosystem";
import DashboardMenuButton from "./DashboardMenuButton";
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
        setDrawerOpen(false);
        navigate("/dashboard/" + address);
    };

    let menuitems = [
        {
            name: "اطلاعات کاربر",
            address: "profile",
        },
        {
            name: "نشانی ها",
            address: "addresses",
        },
        {
            name: "تاریخچه سفارشات",
            address: "order-history",
        },
        {
            name: "سبد های خرید",
            address: "carts",
        },
    ];

    switch (userData.role) {
        case 0:
            menuitems = menuitems.concat([...CustomerMenu]);
            break;
        case 1:
            menuitems = menuitems.concat([...AccountantMenu]);
            break;
        case 2:
            menuitems = menuitems.concat([...MarketerMenu]);
            break;
        case 3:
            menuitems = menuitems.concat([...SupervisorMenu]);
            break;
        default:
            break;
    }

    const Menu = () => {
        return (
            <Stack
                spacing={mobile ? 2 : 0}
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    p: mobile ? 0 : 2,
                }}
            >
                {menuitems.map((item, index) => (
                    <DashboardMenuButton
                        key={index}
                        onClick={() => menuButtonClick(item.address)}
                    >
                        {item.name}
                    </DashboardMenuButton>
                ))}
                <DashboardMenuButton onClick={logout}>
                    خروج از حساب کاربری
                </DashboardMenuButton>
            </Stack>
        );
    };

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
                        bgcolor: "lightcoral",
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
