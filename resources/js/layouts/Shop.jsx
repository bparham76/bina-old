import { Box, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShopCard from "../components/ShopCard";

export default function Shop() {
    return (
        <>
            <Header />
            <div className="w-full h-48"></div>
            <Grid container spacing={4} padding={4}>
                {[...new Array(30)].map((item, idx) => (
                    <Grid item xs={12} sm={6} lg={3} key={idx}>
                        <ShopCard pic={idx}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </ShopCard>
                    </Grid>
                ))}
            </Grid>
            <div className="w-full h-48"></div>
            <Footer />
        </>
    );
}
