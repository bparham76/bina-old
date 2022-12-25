import { createContext, useContext, useState, useEffect } from "react";
import { useAuthenticate } from "../auth/AuthEcosystem";
import { useNavigate, useLocation } from "react-router-dom";

export const ShopContext = createContext(null);

const ShopEcosystem = ({ children }) => {
    const [shopName, setShopName] = useState("بازرگانی مهر");
    const [shopDescription, setShopDescription] = useState(
        "نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
    );

    const [userAddresses, setUserAddresses] = useState([]);
    const [carts, setCarts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [financials, setFinancials] = useState([]);
    const [breadcrumbsItems, setBreadCrumbsItems] = useState([]);

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    //sample data
    useEffect(() => {
        setUserAddresses([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setCarts([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setOrders([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setFinancials([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setBreadCrumbsItems([
            {
                title: "خانه",
                address: "/",
            },
        ]);
    }, []);

    const getShopInfo = () => {
        return {
            shopName,
            shopDescription,
        };
    };

    const addNewAddress = (id) =>
        setUserAddresses(userAddresses.concat({ id: id }));

    return (
        <ShopContext.Provider
            value={{
                sideMenuOpen,
                setSideMenuOpen,
                breadcrumbsItems,
                setBreadCrumbsItems,
                getShopInfo,
                userAddresses,
                setUserAddresses,
                carts,
                setCarts,
                orders,
                setOrders,
                financials,
                setFinancials,
                addNewAddress,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default ShopEcosystem;

export const useShopInfo = () => {
    const { getShopInfo } = useContext(ShopContext);
    return { ...getShopInfo() };
};

export const useShop = () => {
    const { ...shop } = useContext(ShopContext);

    return { ...shop };
};

export const useSetWebPage = () => {
    const { checkAuthState } = useAuthenticate();
    const navigate = useNavigate();
    const location = useLocation();

    const setter = ({ page = "", authCheck = false, data }) => {
        if (location.pathname == page) return;

        if (authCheck) checkAuthState();

        navigate(page, { state: data });

        window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
    };

    return setter;
};
