import { useState, useEffect } from "react";
import { useSetWebPage } from "../../features/shop/ShopEcosystem";
import {
    useMediaQuery,
    Fab,
    SwipeableDrawer,
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
import AccountantMenu from "./accountant/AccountantMenu";
import CustomerMenu from "./customer/CustomerMenu";
import MarketerMenu from "./marketer/MarketerMenu";
import SupervisorMenu from "./supervisor/SupervisorMenu";
import AdminMenu from "./admin/AdminMenu";

const DashboardMenu = () => {
    const mobile = useMediaQuery("(max-width: 900px)");
    const MenuBreakPoint = useMediaQuery("(max-width: 600px)");
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
            name: "علاقه مندی ها",
            address: "favourites",
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
        case 4:
            menuitems = menuitems.concat([...AdminMenu]);
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
                        <ListItemText
                            primary={item.name}
                            style={{ textAlign: MenuBreakPoint && "center" }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItem>
                <ListItemButton onClick={logout}>
                    <ListItemText
                        primary="خروج از حساب کاربری"
                        style={{ textAlign: MenuBreakPoint && "center" }}
                    />
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
                    color="error"
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

                <SwipeableDrawer
                    onClose={(e) => setDrawerOpen(false)}
                    onOpen={(e) => setDrawerOpen(true)}
                    open={drawerOpen}
                    anchor="bottom"
                    PaperProps={{
                        style: {
                            width: MenuBreakPoint ? "100%" : "60%",
                            maxHeight: "90%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginLeft: !MenuBreakPoint && "auto",
                            marginRight: !MenuBreakPoint && "auto",
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
