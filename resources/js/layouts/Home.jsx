import Header from "../components/general/Header";
import Footer from "../components/general/Footer";
import { Box } from "@mui/system";

export default function Home() {
    return (
        <>
            <Header
                websiteName="بازرگانی مهر"
                websiteDetails="نماینده رسمی فروش و خدمات شرکت ایران رادیاتور"
            />
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
