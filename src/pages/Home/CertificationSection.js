import React from "react";

export default function CertificationSection() {
    const imgStyle = {
        border: "0px",
    };
    const certification = [
        "certification/certify-img-5.webp",
        "certification/certify-img-6.webp",
        "certification/halal-india-mevive-certificate.webp",
        "certification/certify-img-1.webp",
        "certification/certify-img-2.webp",
        "certification/certify-img-3.webp",
    ];

    return (
        <>
            <section className="certificate-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="certify-cont">
                                <div className="head-block">
                                    <h2 className="text-black">
                                        Our{" "}
                                        <span className="color-orange">
                                            Certification
                                        </span>
                                    </h2>
                                    <p>
                                        Mevive® a Manufacturer, Bulk Supplier of
                                        Dehydrated Vegetables, Spray Dried Fruit
                                        Powders, Dried Leaves, Dried Herbs and
                                        Spice Powders in India.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="certify-img">
                                <ul>
                                    {certification.map((value, i) => {
                                        return (
                                            <li key={i}>
                                                <img
                                                    style={imgStyle}
                                                    src={`images/${value}`}
                                                    className="img-fluid"
                                                    alt="Certification"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
