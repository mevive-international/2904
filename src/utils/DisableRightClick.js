import React, { useEffect } from "react";

export default function DisableRightClick() {
    useEffect(() => {
        document.addEventListener("contextmenu", (event) =>
            event.preventDefault()
        );

        return () => "";
    }, []);

    return <></>;
}
