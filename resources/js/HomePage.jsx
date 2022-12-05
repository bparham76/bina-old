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
        path: "fuck",
        element: <h1>Fuck page</h1>,
    },
    {
        path: "fuck",
        // element: <h1>Fuck page</h1>,
        children: [
            {
                path: "me",
                element: <h1>Fuck me child page of fuck page</h1>,
            },
            {
                path: "you",
                element: <h1>Little talk with you</h1>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("body")).render(
    <Boilerplate>
        <RouterProvider router={routes} />
    </Boilerplate>
);
