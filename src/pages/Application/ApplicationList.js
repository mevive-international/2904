import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";
import "./styles/ApplicationList.css";

export default function ApplicationList({ appData }) {
    return (
        <>
            <section className="applications-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {appData &&
                                    appData.application &&
                                    appData.application.map((value, i) => (
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
                                                <h2>{value.app_title}</h2>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
