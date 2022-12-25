import { useShop } from "../../../features/shop/ShopEcosystem";
import { SwipeableDrawer } from "@mui/material";

const SideMenuDrawer = () => {
    const { sideMenuOpen, setSideMenuOpen } = useShop();

    return (
        <SwipeableDrawer
            anchor="right"
            open={sideMenuOpen}
            onClose={() => setSideMenuOpen(false)}
            onOpen={() => setSideMenuOpen(true)}
            PaperProps={{
                style: {
                    left: "unset",
                    right: 0,
                    maxWidth: 300,
                    width: 300,
                },
            }}
        >
            salam
        </SwipeableDrawer>
    );
};

export default SideMenuDrawer;
