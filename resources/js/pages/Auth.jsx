import ReactDOM from "react-dom/client";
import { Auth } from "../layouts/Auth";

import Boilerplate from "./Boilerplate";

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <Auth />
    </Boilerplate>
);
