import { useMediaQuery, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCard from "../components/ShopCard";
import BottomNavigation from "../components/BottomNavigation";

export default function Shop() {
    const mobile = useMediaQuery("(max-width: 450px)");

    return (
        <>
            <Header />
            <Grid container padding={mobile ? 0 : 2}>
                {[...new Array(14)].map((item, idx) => (
                    <Grid item xs={12} sm={6} lg={3} key={idx}>
                        <ShopCard pic={idx + 22} />
                    </Grid>
                ))}
            </Grid>
            <Footer showBottomNavigation />
        </>
    );
}
