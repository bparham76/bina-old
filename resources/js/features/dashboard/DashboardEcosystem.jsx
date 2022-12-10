import { useContext, createContext } from "react";

const DashboardContext = createContext(null);

const DashboardEcosystem = (props) => {
    const { children } = props;

    const createNewAddress = () => {};

    const updateAddress = ({ id, data }) => {};
    const deleteAddress = ({ id, data }) => {};

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
