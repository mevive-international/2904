import React from "react";
import ContactInfoForm from "./ContactInfoForm";
import ContactInfoLocation from "./ContactInfoLocation";

export default function ContactInfoSection({ appData }) {
    return (
        <>
            <section
                className="contactinfo-section contact-page-section"
                style={{ paddingBottom: "40px" }}
            >
                <div className="container">
                    <div className="col-md-12">
                        <div
                            style={{ marginBottom: "40px" }}
                            className="head-block text-center aos-init"
                            data-aos="fade-In"
                            data-aos-offset="300"
                        >
                            <h2 className="text-black">
                                What are you{" "}
                                <span className="color-orange">
                                    looking for?
                                </span>
                            </h2>
                            <div className="row">
                                <div className="col-2"></div>
                                <div className="col-8">
                                    <h2 className="contact-info-desc">
                                        Let us know your requirements using the
                                        enquiry form below. Our sales
                                        representatives would love to satisfy
                                        your ingredients requirement &amp; help
                                        you in reaching a successful product
                                        development.
                                    </h2>
                                </div>
                                <div className="col-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                            <ContactInfoLocation appData={appData} />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 form-column">
                            <ContactInfoForm appData={appData} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
