import React from "react";

export default function WhyChooseSection() {
    return (
        <>
            <section className="choose-us">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 aos-init"
                            data-aos="fade-down"
                            data-aos-offset="100"
                        >
                            <div className="head-block">
                                <h2 className="text-black text-center">
                                    Why{" "}
                                    <span className="color-orange">Choose</span>{" "}
                                    Us
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-md-12 aos-init"
                            data-aos="fade-up"
                            data-aos-offset="100"
                        >
                            <div className="choose-us-list">
                                <ul>
                                    <li className="choose-det choose-det-1">
                                        <img
                                            src="/images/icons/choose-img1.webp"
                                            alt="Global Sourcing"
                                        />
                                        <h5>Global Sourcing</h5>
                                        <p>
                                            Sourcing is done by an in-house team
                                            of experienced and certified
                                            professionals. We ensure our clients
                                            get top-notch quality Ingredients
                                            from their respective origins.
                                        </p>
                                    </li>
                                    <li className="choose-det">
                                        <img
                                            src="/images/icons/choose-img2.webp"
                                            alt="Quality"
                                        />
                                        <h5>Quality</h5>
                                        <p>
                                            “Quality is Our Commitment and Our
                                            Customer's right.” We ensure that
                                            the Quality of our products is not
                                            compromised at any cost. We are
                                            approved by the certification
                                            bodies.
                                        </p>
                                    </li>
                                    <li className="choose-det">
                                        <img
                                            src="/images/icons/choose-img3.webp"
                                            alt="One-stop procurement"
                                        />
                                        <h5>One-stop procurement</h5>
                                        <p>
                                            More than 200+ Natural Food
                                            Ingredients. Sourcing ingredients is
                                            easier with us. Delivering PAN
                                            India, Middle-east & Export
                                            globally.
                                        </p>
                                    </li>
                                    <li className="choose-det choose-det-1">
                                        <img
                                            src="/images/icons/choose-img4.webp"
                                            alt="Value-added Customization"
                                        />
                                        <h5>Value-added Customization</h5>
                                        <p>
                                            We offer customization in
                                            leaves/vegetable sizes,
                                            flavour/quantity/packing, Steam
                                            Sterilisation, ETO treatment as per
                                            the customer specification.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
