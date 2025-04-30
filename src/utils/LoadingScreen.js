import React from "react";

export default function LoadingScreen({ status }) {
    return (
        <>
            {status && (
                <div id="preloader">
                    <img src="/images/logo-dark.webp" alt="Logo" />
                </div>
            )}
        </>
    );
}
