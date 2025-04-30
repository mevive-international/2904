import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ProgressBar() {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <script src="/js/custom-blog-progress-bar.js"></script>
                </Helmet>
            </HelmetProvider>
            <div className="progress-container">
                <div className="progress-bar" id="myBar"></div>
            </div>
        </>
    );
}
