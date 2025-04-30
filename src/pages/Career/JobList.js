import React from "react";
import { Link } from "react-router-dom";

export default function JobList({ appData }) {
    return (
        <>
            <section className="home-career">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <ul className="job-list">
                                {appData &&
                                    appData.career &&
                                    appData.career.map((value, i) => (
                                        <li className="job-preview" key={i}>
                                            <Link to={`/careers/${value.car_slug}`}>
                                                <div className="content float-left">
                                                    <h4 className="job-title">
                                                        {value.car_title}
                                                    </h4>
                                                    <h5 className="company">
                                                        {value.car_emptype}
                                                    </h5>
                                                </div>
                                            </Link>

                                            <Link
                                                to={`/careers/${value.car_slug}`}
                                                className="btn btn-primary float-sm-right float-xs-left"
                                            >
                                                Apply Now{" "}
                                                <i className="fa fa-down-arrow"></i>
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
