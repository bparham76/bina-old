import { useContext, createContext } from "react";

const DashboardContext = createContext(null);

const DashboardEcosystem = (props) => {
    const { children } = props;

    const createNewAddress = () => {
        alert("new address");
    };

    const updateAddress = (id) => {};
    const deleteAddress = (id) => {};

    const insertProfileData = (profileData) => {};

    return (
        <DashboardContext.Provider
            value={{
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
