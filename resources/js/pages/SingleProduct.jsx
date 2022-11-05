import ReactDOM from "react-dom/client";
import SingleProduct from "../layouts/SingleProduct";

import Boilerplate from "./Boilerplate";

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <SingleProduct />
    </Boilerplate>
);
