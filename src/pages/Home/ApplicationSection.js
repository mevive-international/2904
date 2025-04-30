import React from "react";
import { Link } from "react-router-dom";
import PrintHtml from "../../utils/PrintHtml";

export default function ApplicationSection({ appData }) {
    const sortObject = (o) => {
        return o.sort((a, b) => a.id - b.id);
    };

    const getTitle = (key) => {
        if (
            typeof appData.applications !== "undefined" &&
            typeof appData.applications[key] !== "undefined"
        ) {
            const applications = sortObject(appData.applications);
            return applications[key].app_title;
        } else {
            return "";
        }
    };
    const getSlug = (key) => {
        if (
            typeof appData.applications !== "undefined" &&
            typeof appData.applications[key] !== "undefined"
        ) {
            const applications = sortObject(appData.applications);
            return applications[key].app_slug;
        } else {
            return "";
        }
    };
    const getDesc = (key) => {
        if (
            typeof appData.applications !== "undefined" &&
            typeof appData.applications[key] !== "undefined" &&
            typeof appData.applications[key].application_details !==
                "undefined" &&
            typeof appData.applications[key].application_details[0] !==
                "undefined"
        ) {
            const applications = sortObject(appData.applications);
            const regex = /(<([^>]+)>)/gi;
            const result = applications[
                key
            ].application_details[0].app_de_description.replace(regex, "");
            return result.substring(0, 100) + "...";
        } else {
            return "";
        }
    };
    return (
        <>
            <section className="application-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-block text-center">
                                <h2 className="text-black">
                                    Browse By{" "}
                                    <span className="color-orange">
                                        Applications
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="application-cont-block">
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(0)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(0)}</h5>
                                            <p><PrintHtml html={getDesc(0)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/app-img1.webp"
                                            className="img-fluid"
                                            alt={getTitle(0)}
                                        />
                                        <h5>{getTitle(0)}</h5>
                                    </div>
                                </div>
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(1)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(1)}</h5>
                                            <p><PrintHtml html={getDesc(1)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/confectionery-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(1)}
                                        />
                                        <h5>{getTitle(1)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="application-cont-block">
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(2)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(2)}</h5>
                                            <p><PrintHtml html={getDesc(2)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/app-img3.webp"
                                            className="img-fluid"
                                            alt={getTitle(2)}
                                        />
                                        <h5>{getTitle(2)}</h5>
                                    </div>
                                </div>
                                <div className="app-det pt-05">
                                    <Link
                                        to={`/applications/${getSlug(3)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(3)}</h5>
                                            <p><PrintHtml html={getDesc(3)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/canned-foods-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(3)}
                                        />
                                        <h5>{getTitle(3)}</h5>
                                    </div>
                                </div>
                                <div className="app-det pt-05">
                                    <Link
                                        to={`/applications/${getSlug(4)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(4)}</h5>
                                            <p><PrintHtml html={getDesc(4)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/beverage-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(4)}
                                        />
                                        <h5>{getTitle(4)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="application-cont-block">
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(5)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(5)}</h5>
                                            <p><PrintHtml html={getDesc(5)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/pharmaceuticals-nutraceuticals-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(5)}
                                        />
                                        <h5>{getTitle(5)}</h5>
                                    </div>
                                </div>
                                <div className="app-det pt-15">
                                    <Link
                                        to={`/applications/${getSlug(6)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(6)}</h5>
                                            <p><PrintHtml html={getDesc(6)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/app-img7.webp"
                                            className="img-fluid"
                                            alt={getTitle(6)}
                                        />
                                        <h5>{getTitle(6)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="application-cont-block">
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(7)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(7)}</h5>
                                            <p><PrintHtml html={getDesc(7)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/snacks-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(7)}
                                        />
                                        <h5>{getTitle(7)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="application-cont-block">
                                <div className="app-det">
                                    <Link
                                        to={`/applications/${getSlug(8)}`}
                                        className="over-lay-cont"
                                    >
                                        <div className="over-cont-down">
                                            <h5>{getTitle(8)}</h5>
                                            <p><PrintHtml html={getDesc(8)} /></p>
                                            <button className="btn app-more">
                                                More Details
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="application-img">
                                        <img
                                            src="images/application/ready-to-cook-eat-heat-fry-ingredients-mevive.webp"
                                            className="img-fluid"
                                            alt={getTitle(8)}
                                        />
                                        <h5>{getTitle(8)}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
