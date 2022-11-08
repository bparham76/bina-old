import Header from "../components/Header";
import Footer from "../components/Footer";
import MapViewer from "../components/MapViewer";

const SingleProduct = () => {
    return (
        <>
            <Header />
            <div className="w-full h-48"></div>
            <MapViewer mapCenter={[35.69975, 51.33806]} mapHeight={200} />
            <Footer />
        </>
    );
};

export default SingleProduct;
