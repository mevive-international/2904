import React from "react";
import CookieConsent from "react-cookie-consent";

export default function AppCookieConsent() {
    return (
        <>
            <CookieConsent
                enableDeclineButton
                flipButtons
                location="bottom"
                buttonText="I Understand"
                cookieName="MeviveInternationalCookieConsent"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                containerClasses="text-center"
            >
                This website uses cookies to improve performance and enhance the user experience.
            </CookieConsent>
        </>
    );
}
