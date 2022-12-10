import { createContext, useContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopEcosystem = (props) => {
    const { children } = props;
    const [shopName, setShopName] = useState("بازرگانی مهر");
    const [shopDescription, setShopDescription] = useState(
        "نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
    );

    const getShopInfo = () => {
        return {
            shopName,
            shopDescription,
        };
    };

    return (
        <ShopContext.Provider value={{ getShopInfo }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopEcosystem;

export const useShopInfo = () => {
    const { getShopInfo } = useContext(ShopContext);
    return { ...getShopInfo() };
};
