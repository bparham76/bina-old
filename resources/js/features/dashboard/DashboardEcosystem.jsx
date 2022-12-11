import { Box } from "@mui/material";

import { useContext, createContext, useState } from "react";

const DashboardContext = createContext(null);

const DashboardEcosystem = (props) => {
    const { children } = props;

    const [userAddresses, setUserAddresses] = useState([]);

    const createNewAddress = (addressData) => {};

    const updateAddress = ({ id, data }) => {};
    const deleteAddress = ({ id, data }) => {};

    const insertProfileData = (profileData) => {};

    return (
        <DashboardContext.Provider
            value={{
                userAddresses,
                setUserAddresses,
                createNewAddress,
                updateAddress,
                deleteAddress,
                insertProfileData,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardEcosystem;

export const useDashboardSettings = () => {
    const { ...settings } = useContext(DashboardContext);

    return { ...settings };
};
