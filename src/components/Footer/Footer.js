import React from "react";
import CopyRight from "./CopyRight";
import FooterMenu from "./FooterMenu";
import WhatsApp from "./WhatsApp";
import '../../styles/footer.css';
import BackToTop from "./BackToTop";
import FreeSample from "./FreeSample";

export default function Footer({appData}) {
    return (
        <>
            <FooterMenu appData={appData} />
            <CopyRight />
            <WhatsApp />
            <BackToTop />
            <FreeSample />
        </>
    );
}
