import ReactDOM from "react-dom/client";
import Authentication from "../layouts/Authentication";

import Boilerplate from "./Boilerplate";

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <Authentication />
    </Boilerplate>
);
