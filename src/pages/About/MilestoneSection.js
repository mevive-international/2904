import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PrintHtml from "../../utils/PrintHtml";

export default function MilestoneSection({ appData }) {
    const getYear = (value) => {
        return new Date(value).getFullYear();
    };
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
            <section className="ps-timeline-sec cd-horizontal-timeline loaded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-block text-center">
                                <h2 className="text-white">
                                    Our{" "}
                                    <span className="color-orange">
                                        Milestones
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-block">
                                <ul className="timeline-carousel owl-carousel owl-theme">
                                    {appData.milestone &&
                                        appData.milestone.map((value, i) => {
                                            return (
                                                <li key={i}>
                                                    <span className="ps-sp-bot">
                                                        {getYear(value.ms_date)}
                                                    </span>
                                                    <div className="ps-bot">
                                                        <PrintHtml
                                                            html={
                                                                value.ms_description
                                                            }
                                                        />
                                                    </div>
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
