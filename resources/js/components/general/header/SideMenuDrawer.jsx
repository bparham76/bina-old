import {
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

const SideMenuDrawer = ({ handleMenu }) => {
    const { menuOpen, setMenuOpen } = handleMenu;

    const MenuItem = ({ title, address }) => (
        <ListItem>
            <ListItemButton>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );

    const menuItems = [
        { title: "داشبورد", address: "" },
        { title: "سبد خرید", address: "" },
        { title: "سبد خرید", address: "" },
        { title: "سبد خرید", address: "" },
        { title: "سبد خرید", address: "" },
        { title: "فروشگاه", address: "" },
        { title: "دسته بندی", address: "" },
        { title: "خروج", address: "" },
    ];

    return (
        <Drawer
            anchor="right"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            SlideProps={{ unmountOnExit: true }}
            PaperProps={{
                style: {
                    left: "unset",
                    right: 0,
                    maxWidth: 300,
                    width: 300,
                },
            }}
        >
            <Box sx={{ p: 0 }}>
                <List subheader={<h1>Salam</h1>}>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} title={item.title} />
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideMenuDrawer;
