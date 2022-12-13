import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import { Box } from "@mui/system";
import { useShopInfo } from "../features/shop/ShopEcosystem";

export default function Home() {
    const { shopName, shopDescription } = useShopInfo();

    return (
        <>
            <Header websiteName={shopName} websiteDetails={shopDescription} />
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "1500px",
                    m: 0,
                    p: 0,
                }}
            >
                Salam
            </Box>
            <Footer />
        </>
    );
}
