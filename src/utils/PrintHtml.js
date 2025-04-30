import React from "react";

export default function PrintHtml({ html }) {
    const createMarkup = (string) => {
        return { __html: string };
    };

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup(html)} />
        </>
    );
}
