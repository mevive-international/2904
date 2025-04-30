import React from "react";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";

export default function AboutSection({ appData }) {
    return (
        <>
            {appData.about && (
                <section className="home-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-cntnt">
                                    <img
                                        src={`${constants.APP_BASE_URL}${appData.about[0].abt_image}`}
                                        className="img-fluid float-left"
                                        alt="About Us"
                                    />
                                    <div className="head-block">
                                        <h4 className="text-black home-about-title">
                                            {appData.about[0].abt_title}
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
                                        <PrintHtml
                                            html={
                                                appData.about[0].abt_description
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
