import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import ProfileInfo from "../../components/dashboard/common/ProfileInfo";
import Addresses from "../../components/dashboard/common/Addresses";
import OrderHistory from "../../components/dashboard/common/OrderHistory";
import ShoppingCarts from "../../components/dashboard/common/ShoppingCarts";

const useSetCurrentPage = ({ dist, act, role, data }) => {
    const [comp, setComp] = useState(null);

    useEffect(() => {
        switch (dist) {
            case "profile":
                setComp(<ProfileInfo />);
                break;
            case "addresses":
                setComp(<Addresses />);
                break;
            case "order-history":
                setComp(<OrderHistory />);
                break;
            case "carts":
                setComp(<ShoppingCarts />);
                break;
            default:
                switch (role) {
                    case 0:
                        switch (dist) {
                            case "financials":
                                setComp(<h1>shit</h1>);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        setComp(
                            <Box sx={{ width: "100%", height: "80vh" }}>
                                404
                            </Box>
                        );
                }
                break;
        }
    }, []);

    return comp;
};

export default useSetCurrentPage;
