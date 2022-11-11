import ReactDOM from "react-dom/client";
import Home from "../layouts/Home";

import Boilerplate from "./Boilerplate";

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <Home />
    </Boilerplate>
);
