import ProductGroup from "../../components/shop/ProductGroup";
import SearchProducts from "../../components/shop/SearchProducts";
import SingleProduct from "../../components/shop/SingleProduct";

const ShopView = ({ dist, act }) => {
    switch (dist) {
        case undefined:
            return <ProductGroup />;
        case "search":
            return <SearchProducts />;
        case "product":
            if (typeof act != "undefined")
                return <SingleProduct productId={act} />;
            else return "404";
        default:
            return "404";
    }
};

export default ShopView;
