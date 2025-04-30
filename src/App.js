import React, { useEffect } from "react";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouteConfig from "./RouteConfig";
// import AppCookieConsent from "./utils/AppCookieConsent";
import DisableRightClick from "./utils/DisableRightClick";
import RemoveUrlTrailingSlash from "./utils/RemoveUrlTrailingSlash";

function App() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            // Disable Ctrl+U (View Source)
            if (event.ctrlKey && event.key === "u") {
                event.preventDefault();
                console.log("Ctrl+U is disabled");
            }

            // Disable Ctrl+Shift+I (Developer Tools)
            if (event.ctrlKey && event.shiftKey && event.key === "I") {
                event.preventDefault();
                console.log("Ctrl+Shift+I is disabled");
            }

            // Disable F12 (Developer Tools)
            if (event.key === "F12") {
                event.preventDefault();
                console.log("F12 is disabled");
            }
        };

        // Add the event listener
        window.addEventListener("keydown", handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <>
            <DisableRightClick />
            {/* <AppCookieConsent /> */}
            <RemoveUrlTrailingSlash />
            <ScrollToTop />
            <RouteConfig />
            <ToastContainer />
        </>
    );
}

export default App;
