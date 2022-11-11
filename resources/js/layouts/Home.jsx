import { useMediaQuery, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    const mobile = useMediaQuery("(max-width: 450px)");

    return (
        <>
            <Header />
            This is Home
            <Footer showBottomNavigation />
        </>
    );
}
