import { useMediaQuery, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCard from "../components/ShopCard";

export default function Shop() {
    const mobile = useMediaQuery("(max-width: 450px)");

    return (
        <>
            <Header />
            <div className="w-full h-36"></div>
            <Grid container spacing={mobile ? 0 : 2} padding={mobile ? 0 : 2}>
                {[...new Array(7)].map((item, idx) => (
                    <Grid item xs={12} sm={6} lg={3} key={idx}>
                        <ShopCard pic={idx}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ShopCard>
                    </Grid>
                ))}
            </Grid>
            <div className="w-full h-24"></div>
            <Footer />
        </>
    );
}
