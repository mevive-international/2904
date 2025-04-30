import React from "react";
import { Link } from "react-router-dom";
import "./styles/AboutSection.css";

export default function AboutSection() {
    return (
        <>
            <section className="home-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="home-abt-img">
                                <img
                                    src="images/home-abt-img.webp"
                                    className="img-fluid"
                                    alt="About Us"
                                />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="home-abt-cont">
                                <div className="head-block">
                                    <h4 className="text-black home-about-title">
                                        Who We Are
                                    </h4>
                                    <h1 className="home-about-heading">
                                        India's Trusted Company of Premium
                                        Quality{" "}
                                        <span className="color-orange">
                                            Food Ingredients
                                        </span>
                                    </h1>
                                </div>
                                <div className="home-abt-details">
                                    <p>
                                        Mevive International established in 2009
                                        & headquartered at Coimbatore,
                                        Tamilnadu, India - is engaged in
                                        “Sourcing, Value-Adding & Exporting
                                        superior quality food ingredients”. Our
                                        aim is to redefine the market standards
                                        when it comes to Quality, Service and
                                        Customer Satisfaction. Each and every
                                        process right from procurement to
                                        packing is under the careful and strict
                                        supervision of our qualified and
                                        certified professionals. Our consistent
                                        focus on value addition and our ethical
                                        business practices and policies have
                                        helped Mevive International emerge as a
                                        market leader and we strive to prove our
                                        excellence in this industry. We are
                                        bestowed with an advanced, robust and
                                        reliable network of infrastructure
                                        facilities across the globe.
                                    </p>
                                    <Link to="about-us">
                                        <button className="btn btn-primary">
                                            Read More
                                        </button>{" "}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
