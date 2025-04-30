import React from "react";

export default function WhatsApp() {
    const whatsAppUrl = () => {
        // if current url path contains careers show different whatsapp number
        const currentUrl = window.location.pathname;
        let whatsAppNumber = "+917540073991";
        let whatsAppMessage =
            "Hello there! I am interested in one of the products available on your website www.meviveinternational.com.";
        if (currentUrl.includes("careers")) {
            whatsAppNumber = "+919600927255";
            whatsAppMessage =
                "Hello there! I am interested in one of the jobs available on your website www.meviveinternational.com.";
        }
        return (
            "https://api.whatsapp.com/send?l=en&text=" +
            encodeURIComponent(whatsAppMessage) +
            "&phone=" +
            encodeURIComponent(whatsAppNumber)
        );
    };
    return (
        <>
            <div className="whatsapppp">
                <a
                    href={whatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-float"
                >
                    <img src="/images/whatsapp-logo.webp" alt="WhatsApp Icon" />
                </a>
            </div>
        </>
    );
}
