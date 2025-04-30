import React from "react";
import PrintHtml from "../../utils/PrintHtml";

export default function LocationSection({ appData }) {
    return (
        <>
            {appData && appData.contact && (
                <section className="locations-section bg-color-2">
                    <div
                        className="pattern-layer"
                        style={{
                            backgroundImage: "url(/images/icons/pattern-50.webp)",
                        }}
                    ></div>
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column pb-5">
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
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="head-block">
                                                <h2 className="text-black">
                                                    India{" "}
                                                    <span className="color-orange">
                                                        Office{" "}
                                                    </span>{" "}
                                                </h2>
                                                <img
                                                    src="images/icons/india-gate.webp"
                                                    alt="India Gate"
                                                />
                                            </div>
                                        </div>
                                        <ul className="info-list clearfix">
                                            <li>
                                                <i>
                                                    <img
                                                        width="100%"
                                                        src="/images/icons/address.webp"
                                                        alt="Address"
                                                    />
                                                </i>
                                                <p>Address</p>
                                                <b>
                                                    <PrintHtml
                                                        html={
                                                            appData.contact[0]
                                                                .con_address
                                                        }
                                                    />
                                                </b>
                                            </li>

                                            <li>
                                                <i>
                                                    <img
                                                        width="100%"
                                                        src="/images/icons/cell.webp"
                                                        alt="Phone"
                                                    />
                                                </i>
                                                <p>Phone</p>
                                                <b>
                                                    <a
                                                        href={`tel:${appData.contact[0].con_c_code}${appData.contact[0].con_phone}`}
                                                    >
                                                        {
                                                            appData.contact[0]
                                                                .con_c_code
                                                        }{" "}
                                                        {
                                                            appData.contact[0]
                                                                .con_phone
                                                        }
                                                    </a>
                                                </b>
                                            </li>
                                            <li>
                                                <a
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "600",
                                                    }}
                                                    href={
                                                        appData.contact[0]
                                                            .con_location
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Get Location{" "}
                                                    <img
                                                        style={{ width: "10%" }}
                                                        src="/images/icons/enter.webp"
                                                        alt="Location"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div
                                    className="single-item wow fadeInUp animated animated animated"
                                    data-wow-delay="300ms"
                                    data-wow-duration="1500ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1500ms",
                                        animationDelay: "300ms",
                                        animationName: "fadeInUp",
                                    }}
                                >
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.341075991216!2d76.9993554!3d11.013015900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d29cd38cfd%3A0x29ad4648d2296416!2sMevive%20International%20Food%20Ingredients!5e0!3m2!1sen!2sin!4v1677603100786!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" title="India" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column pb-5">
                                <div
                                    className="single-item wow fadeInUp animated animated animated"
                                    data-wow-delay="300ms"
                                    data-wow-duration="1500ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1500ms",
                                        animationDelay: "300ms",
                                        animationName: "fadeInUp",
                                    }}
                                >
                                    <div className="inner-box">
                                        <div className="upper-box">
                                            <div className="head-block">
                                                <h2 className="text-black">
                                                    UAE{" "}
                                                    <span className="color-orange">
                                                        Office{" "}
                                                    </span>{" "}
                                                </h2>
                                                <img
                                                    src="/images/icons/burj-al-arab.webp"
                                                    alt="UAE Office"
                                                />
                                            </div>
                                        </div>
                                        <ul className="info-list clearfix">
                                            <li>
                                                <i>
                                                    <img
                                                        width="100%"
                                                        src="/images/icons/address.webp"
                                                        alt="Address"
                                                    />
                                                </i>
                                                <p>Address</p>
                                                <b>
                                                    <PrintHtml
                                                        html={
                                                            appData.contact[1]
                                                                .con_address
                                                        }
                                                    />
                                                </b>
                                            </li>

                                            <li>
                                                <i>
                                                    <img
                                                        width="100%"
                                                        src="/images/icons/cell.webp"
                                                        alt="Phone"
                                                    />
                                                </i>
                                                <p>Phone</p>
                                                <b>
                                                    <a
                                                        href={`tel:${appData.contact[1].con_c_code}${appData.contact[1].con_phone}`}
                                                    >
                                                        {
                                                            appData.contact[1]
                                                                .con_c_code
                                                        }{" "}
                                                        {
                                                            appData.contact[1]
                                                                .con_phone
                                                        }
                                                    </a>
                                                </b>
                                            </li>

                                            <li>
                                                <a
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "600",
                                                    }}
                                                    href={
                                                        appData.contact[1]
                                                            .con_location
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Get Location{" "}
                                                    <img
                                                        style={{ width: "10%" }}
                                                        src="/images/icons/enter.webp"
                                                        alt="Location"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                <div
                                    className="single-item wow fadeInUp animated animated animated"
                                    data-wow-delay="300ms"
                                    data-wow-duration="1500ms"
                                    style={{
                                        visibility: "visible",
                                        animationDuration: "1500ms",
                                        animationDelay: "300ms",
                                        animationName: "fadeInUp",
                                    }}
                                >
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.563081829082!2d55.308533399999995!3d25.251637000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d4782c4c0f9%3A0x91d6169ba4bf3be!2sMevive%20General%20Trading%20LLC%20%7C%20Food%20Ingredients%20Supplier%20in%20Dubai!5e0!3m2!1sen!2sin!4v1677603242578!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" title="UAE" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
