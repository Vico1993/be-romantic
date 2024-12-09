import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DEFAULT_THEME, ThemeProvider } from "@zendeskgarden/react-theming";

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
        <ThemeProvider theme={DEFAULT_THEME}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
