import ProfileInfo from "../../components/dashboard/common/ProfileInfo";
import Addresses from "../../components/dashboard/common/Addresses";
import OrderHistory from "../../components/dashboard/common/OrderHistory";
import Favourites from "../../components/dashboard/common/Favourites";

import AddressNew from "../../components/dashboard/common/AddressNew";
import AddressEdit from "../../components/dashboard/common/AddressEdit";
import OrderDetails from "../../components/dashboard/common/OrderDetails";
import FavouriteDetails from "../../components/dashboard/common/FavouriteDetails";

import CustomerFinancials from "../../components/dashboard/customer/CustomerFinancials";

import ManageProducts from "../../components/dashboard/admin/ManageProducts";

const DashboardView = ({ dist, act }) => {
    switch (dist) {
        case undefined:
            return;
        case "profile":
            return <ProfileInfo />;
        case "addresses":
            if (act == "edit") return <AddressEdit />;
            else if (act == "new") return <AddressNew />;
            else return <Addresses />;
        case "order-history":
            if (act == "show") return <OrderDetails />;
            else return <OrderHistory />;
        case "favourites":
            if (act == "show") return <FavouriteDetails />;
            else return <Favourites />;
        case "financials":
            //check for user role and load page based on that
            return <CustomerFinancials />;
        case "products":
            //check for user role and load page based on that
            return <ManageProducts />;
        default:
            return <Box sx={{ width: "100%", height: "80vh" }}>404</Box>;
    }
};

export default DashboardView;
