import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import constants from "../../config.json";
import DownloadSection from "./DownloadSection";
import LinkSection from "./LinkSection";

export default function TestimonialSection({ appData }) {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="css/owl.carousel.min.css"
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="css/owl.theme.default.min.css"
                    />
                    <script src="/js/owl.carousel.min.js"></script>
                    <script src="js/custom-about-owl-carousel.js"></script>
                </Helmet>
            </HelmetProvider>
            <section className="testimonial-sec">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 aos-init"
                            data-aos="fade-in"
                            data-aos-offset="100"
                        >
                            <ul className="testi-carousel owl-carousel owl-theme">
                                {appData.testimonial &&
                                    appData.testimonial.map((value, i) => {
                                        return (
                                            <li className="testi-block" key={i}>
                                                <img
                                                    src={
                                                        constants.STORAGE_BASE_URL +
                                                        value.image
                                                    }
                                                    style={{
                                                        height: "100px",
                                                        width: "100px",
                                                        borderRadius: "50%",
                                                    }}
                                                    alt={value.name}
                                                />
                                                <h5>
                                                    {value.name}
                                                    <span>
                                                        {value.designation}
                                                    </span>
                                                </h5>
                                                <p>{value.message}</p>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                    <DownloadSection />
                </div>
                <LinkSection />
            </section>
        </>
    );
}
