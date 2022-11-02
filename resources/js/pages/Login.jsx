import ReactDOM from "react-dom/client";
import { Login } from "../layouts/Login";

import Boilerplate from "./Boilerplate";

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <Login />
    </Boilerplate>
);
