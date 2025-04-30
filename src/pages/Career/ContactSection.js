import React from "react";

export default function ContactSection() {
    return (
        <>
                        <section className="get-call-back">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Connect with HR</h4>

                            <div className="contact-icons">
                                {/* <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/map.webp"
                                            alt="Map Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Address</h5>
                                        <p>
                                            {" "}
                                            M3, Mayflower Metropolis,
                                            Udayampalayam Road, Sowripalayam,
                                            Coimbatore 641028 Tamilnadu, India.{" "}
                                        </p>
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/call.webp"
                                            alt="Call Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Phone Number</h5>
                                        <p>
                                            <a
                                                href="tel:+91 9600927255"
                                                style={{ color: "#000" }}
                                            >
                                                {" "}
                                                +91 9600927255
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/email.webp"
                                            alt="Email Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Email Address</h5>
                                        <p>
                                            {" "}
                                            <a
                                                href="mailto:careers@meviveinternational.com"
                                                style={{ color: "#000" }}
                                            >
                                                careers@meviveinternational.com 
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4>Scan QR to connect with HR</h4>

                            <div className="enquiry-form pt-3">
                                <img src="images/mevive-hr-department.webp" alt="Mevive International HR Department" width={175} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
