import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Boilerplate from "./Boilerplate";
import Home from "./layouts/Home";
import Authentication from "./layouts/Authentication";
import Dashboard from "./layouts/Dashboard";
import Shop from "./layouts/Shop";

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
    {
        path: "dashboard/:dist/:act",
        element: <Dashboard />,
    },
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "shop/:dist",
        element: <Shop />,
    },
    {
        path: "shop/:dist/:act",
        element: <Shop />,
    },
]);

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <RouterProvider router={routes} />
    </Boilerplate>
);
