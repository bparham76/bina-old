import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shop() {
    return (
        <>
            <Header />
            <div className="w-full h-48"></div>
            <h1>Shop</h1>
            {[...new Array(30)].map((item, idx) => (
                <p key={idx}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            ))}
            <div className="w-full h-48"></div>
            <Footer />
        </>
    );
}
