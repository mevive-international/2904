import React from "react";
import { InlineShareButtons } from "sharethis-reactjs";

export default function ShareThis() {
    const config = {
        property: "6178e017e876080012646166",
        alignment: "left",
        color: "white",
        enabled: true,
        font_size: 11,
        networks: ["facebook", "twitter", "email", "whatsapp"],
        padding: 8,
        radius: 15,
        size: 25,
    };

    return (
        <>
            <InlineShareButtons config={config} />
            {/* <div className="sharethis-inline-share-buttons my-3 soci"></div> */}
        </>
    );
}
