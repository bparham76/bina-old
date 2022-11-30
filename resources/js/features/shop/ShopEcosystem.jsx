import { createContext } from "react";

export const ShopContext = createContext(null);

const ShopEcosystem = (props) => {
    const { children } = props;

    return <ShopContext.Provider value={null}>{children}</ShopContext.Provider>;
};

export default ShopEcosystem;
