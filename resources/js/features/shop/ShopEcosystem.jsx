import { useCallback } from "react";
import { createContext, useContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopEcosystem = (props) => {
    const { children } = props;
    const [shopName, setShopName] = useState("بازرگانی مهر");
    const [shopDescription, setShopDescription] = useState(
        "نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
    );

    const [userAddresses, setUserAddresses] = useState([]);
    const [carts, setCarts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [financials, setFinancials] = useState([]);

    //sample data
    useEffect(() => {
        setUserAddresses([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setCarts([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setOrders([{ id: 1 }, { id: 2 }, { id: 3 }]);
        setFinancials([{ id: 1 }, { id: 2 }, { id: 3 }]);
    }, []);

    const getShopInfo = () => {
        return {
            shopName,
            shopDescription,
        };
    };

    const addNewAddress = (id) =>
        setUserAddresses(userAddresses.concat({ id: id }));

    // const addNewAddress = useCallback((id) => {
    //     setUserAddresses(userAddresses.concat({ id: id }));
    // }, []);

    return (
        <ShopContext.Provider
            value={{
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
