import React from "react";
import PrintHtml from "../../utils/PrintHtml";

export default function ContactInfoLocation({ appData }) {
    const whatsAppUrl = (whatsAppNumber) => {
        let whatsAppMessage = "Hi! I'm interested in one of your services.";
        return (
            "https://api.whatsapp.com/send?l=en&text=" +
            encodeURIComponent(whatsAppMessage) +
            "&phone=" +
            encodeURIComponent(whatsAppNumber)
        );
    };

    return (
        <>
            {appData && appData.contact && (
                <section
                    className="locations-section"
                    style={{ padding: "15px 0px" }}
                >
                    <div
                        className="single-item wow fadeInUp animated animated animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                        style={{
                            visibility: "visible",
                            animationDuration: "1500ms",
                            animationDelay: "0ms",
                            animationName: "fadeInUp",
                        }}
                    >
                        <div
                            style={{
                                boxShadow: "none",
                                padding: "0px",
                                height: "380px",
                            }}
                            className="inner-box"
                        >
                            <ul className="info-list clearfix">
                                <li style={{ marginBottom: "50px" }}>
                                    <i>
                                        <img
                                            width="100%"
                                            src="/images/icons/address.webp"
                                            alt="Address Icon"
                                        />
                                    </i>
                                    <p>Address</p>
                                    <b>
                                        <PrintHtml
                                            html={
                                                appData.contact[0].con_address
                                            }
                                        />
                                    </b>
                                    <br />
                                </li>
                                <li style={{ marginBottom: "50px" }}>
                                    <i>
                                        <img
                                            width="100%"
                                            src="/images/icons/emailid.webp"
                                            alt="Email Icon"
                                        />
                                    </i>
                                    <p>Sales Enquiries</p>
                                    <h5>
                                        <a
                                            href={`mailto:${appData.contact[0].con_email}`}
                                        >
                                            {appData.contact[0].con_email}
                                        </a>
                                    </h5>
                                </li>
                                <li style={{ marginBottom: "50px" }}>
                                    <i>
                                        <img
                                            width="100%"
                                            src="/images/icons/whatsapp.webp"
                                            alt="WhatsApp Icon"
                                        />
                                    </i>
                                    <p>Whatsapp Assistance (Sales)</p>
                                    <h5>
                                        <a
                                            href={whatsAppUrl(
                                                appData.contact[0].con_c_code +
                                                    "" +
                                                    appData.contact[0].con_phone
                                            )}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {" "}
                                            {appData.contact[0].con_c_code}{" "}
                                            {appData.contact[0].con_phone}
                                        </a>
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
