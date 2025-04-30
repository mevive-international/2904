import React from "react";

export default function Breadcrumb({ appData }) {
    return (
        <>
            {appData && appData.application_details && (
                <section
                    className="page-title"
                    style={{
                        backgroundImage: "url(/images/application-banner.webp)",
                    }}
                >
                    <div className="auto-container">
                        <h1>
                            Applications
                        </h1>
                    </div>
                </section>
            )}
        </>
    );
}
