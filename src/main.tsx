import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./page/error";
import IndexPage from "./page/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
