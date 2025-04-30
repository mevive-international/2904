import React from "react";

export default function CertificateSection() {
    const certifications = [
        "certification/certify-img-5.webp",
        "certification/certify-img-6.webp",
        "certification/halal-india-mevive-certificate.webp",
        // "certification/certify-img-07.webp",
        "certification/certify-img-1.webp",
        "certification/certify-img-2.webp",
        "certification/certify-img-3.webp",
        "certification/certify-img-7.webp",
        "certification/msme-logo-mevive-certification.webp",
    ];

    return (
        <>
            <section className="certificate-sec" style={{ background: "none" }}>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 aos-init"
                            data-aos="fade-right"
                            data-aos-offset="300"
                        >
                            <div className="certify-cont">
                                <div className="head-block">
                                    <h2 className="text-black text-center">
                                        Our{" "}
                                        <span className="color-orange">
                                            Certification
                                        </span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-10 offset-md-1 aos-init"
                            data-aos="fade-up"
                            data-aos-offset="100"
                        >
                            <div className="row">
                                {certifications.map((value, i) => {
                                    return (
                                        <div className="col-md-3 col-6" key={i}>
                                            <img
                                                src={`images/${value}`}
                                                className="img-fluid"
                                                alt="Certification"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
