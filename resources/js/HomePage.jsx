import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boilerplate from "./Boilerplate";
import Home from "./layouts/Home";
import Authentication from "./layouts/Authentication";
import Dashboard from "./layouts/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>Not found</h1>,
    },
    {
        path: "auth",
        element: <Authentication />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "dashboard/:dist",
        element: <Dashboard />,
    },
]);

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <RouterProvider router={routes} />
    </Boilerplate>
);
