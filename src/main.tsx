import ReactGA from "react-ga4";
import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./page/error";
import IndexPage from "./page/index";

const TRACKING_ID = "G-8QSMQ20PFL";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
]);

function Main() {
    ReactGA.initialize(TRACKING_ID);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Main />
);
