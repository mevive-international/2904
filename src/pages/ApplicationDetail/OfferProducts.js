import React from "react";
import { Link } from "react-router-dom";

export default function OfferProducts({ appData }) {
    return (
        <>
            {appData && appData.offer_products && (
                <section
                    className="tlp-more-topics aos-init"
                    data-aos="fade-up"
                    data-aos-offset="300"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Our{" "}
                                        <span className="color-orange">
                                            Offering Products
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row col-md-12 pl-0">
                            {appData.offer_products.map((value, i) => (
                                <div className="col-md-4" key={i}>
                                    <Link
                                        to={`/product/${value.ca_slug}/${value.prdt_slug}`}
                                    >
                                        <div
                                            className={`tlp-more-topics__row-item ${
                                                i % 2 === 0
                                                    ? "color-scheme-1"
                                                    : "color-scheme-2"
                                            }`}
                                        >
                                            {value.prdt_title}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
