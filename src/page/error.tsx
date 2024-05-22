import React from "react";
import { Link, useRouteError } from "react-router-dom";

interface IRouterError extends Error {
    statusText?: string;
}

export default function Error() {
    const error = useRouteError() as IRouterError;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Go back home</Link>
        </div>
    );
}
