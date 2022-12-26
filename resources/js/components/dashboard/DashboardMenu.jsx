import { useState, useEffect } from "react";
import { useSetWebPage } from "../../features/shop/ShopEcosystem";
import {
    useMediaQuery,
    Fab,
    SwipeableDrawer,
    Paper,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import {
    useUserData,
    useAuthenticate,
} from "../../features/auth/AuthEcosystem";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ComponentPopper from "../general/ComponentPopper";
import DashboardMenuButton from "./DashboardMenuButton";
import AccountantMenu from "./accountant/AccountantMenu";
import CustomerMenu from "./customer/CustomerMenu";
import MarketerMenu from "./marketer/MarketerMenu";
import SupervisorMenu from "./supervisor/SupervisorMenu";

const DashboardMenu = () => {
    const mobile = useMediaQuery("(max-width: 900px)");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const goto = useSetWebPage();
    const { logout } = useAuthenticate();
    const userData = useUserData();

    const menuButtonClick = (address) => {
        setDrawerOpen(false);
        goto({ page: "/dashboard/" + address });
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

    const Menu = () => (
        <List>
            {menuitems.map((item, index) => (
                <ListItem key={index}>
                    <ListItemButton
                        onClick={() => menuButtonClick(item.address)}
                    >
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItem>
                <ListItemButton onClick={logout}>
                    <ListItemText primary="خروج از حساب کاربری" />
                </ListItemButton>
            </ListItem>
        </List>
    );

    useEffect(() => {
        setDrawerOpen(false);
    }, [mobile]);

    if (mobile)
        return (
            <>
                <Fab
                    variant="circular"
                    color="default"
                    size="large"
                    sx={{
                        m: 2,
                        bottom: 0,
                        left: 0,
                        position: "fixed",
                        // color: "red",
                        // bgcolor: "red",
                    }}
                    onClick={() => {
                        setDrawerOpen(true);
                    }}
                >
                    <DashboardIcon />
                </Fab>

                <SwipeableDrawer
                    onClose={(e) => setDrawerOpen(false)}
                    onOpen={(e) => setDrawerOpen(true)}
                    open={drawerOpen}
                    anchor="bottom"
                    PaperProps={{
                        style: {
                            width: "100%",
                            maxHeight: "90%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        },
                    }}
                >
                    <Menu />
                </SwipeableDrawer>
            </>
        );

    return <Menu />;
};

export default DashboardMenu;
