import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";

export default function ApplicationPage({ appData }) {
    return (
        <>
            {appData && appData.application && (
                <section className="applications-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    style={{
                                        marginBottom: "40px",
                                        marginTop: "20px",
                                    }}
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Top application{" "}
                                        <span className="color-orange">
                                            related to the category{" "}
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    {appData.application.map((value, i) => (
                                        <div className="col-md-3" key={i}>
                                            <Link
                                                to={`/applications/${value.app_slug}`}
                                            >
                                                <div className="app-img-color">
                                                    <img
                                                        src={`${constants.APP_BASE_URL}${value.app_image}`}
                                                        alt={value.app_image_alt}
                                                    />
                                                </div>
                                            </Link>
                                            <Link
                                                to={`/applications/${value.app_slug}`}
                                            >
                                                <h4>{value.app_title}</h4>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
