import React from "react";
import TagManager from "react-gtm-module";

export default function GoogleTagManager() {
    const tagManagerArgs = {
        gtmId: "GTM-MMQMXL9",
    };

    TagManager.initialize(tagManagerArgs);
    return <></>;
}
