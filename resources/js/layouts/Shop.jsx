import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import { Box } from "@mui/system";
import { useShopInfo } from "../features/shop/ShopEcosystem";
import { useParams } from "react-router-dom";

import ProductGroup from "../components/shop/ProductGroup";
import SingleProduct from "../components/shop/SingleProduct";
import SearchProduct from "../components/shop/SearchProducts";

const Shop = () => {
    const { shopName, shopDescription } = useShopInfo();
    const { dist, act } = useParams();

    return (
        <>
            <Header
                websiteName={shopName}
                websiteDetails={shopDescription}
                disableBreadCrumbs
            />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    m: 0,
                    p: 0,
                }}
            >
                <ShopView dist={dist} act={act} />
            </Box>
            <Footer />
        </>
    );
};

export default Shop;

const ShopView = ({ dist, act }) => {
    switch (dist) {
        case undefined:
            return <ProductGroup />;
        case "search":
            return <SearchProduct />;
        case "product":
            if (typeof act != "undefined")
                return <SingleProduct productId={act} />;
            else return "404";
        default:
            return "404";
    }
};
