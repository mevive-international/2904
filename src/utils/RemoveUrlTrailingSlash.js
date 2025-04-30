import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RemoveUrlTrailingSlash() {
    const location = useLocation();

    return (
        <>
            {location.pathname.match("/.*/$") && (
                <Navigate
                    replace
                    to={{
                        pathname: location.pathname.replace(/\/+$/, ""),
                        search: location.search,
                    }}
                />
            )}
        </>
    );
}
