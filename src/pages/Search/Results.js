import React from "react";
import { Link, useNavigate } from "react-router-dom";
import constants from "../../config.json";

export default function Results({ currentItems }) {
    const navigate = useNavigate();

    return (
        <>
            <section className="dehydrated offering">
                <div className="container">
                    <div className="row">
                        {currentItems && currentItems.length === 0 && (
                            <div className="col-lg-12">
                                <p className="text-warning">
                                    <i className="fa fa-info-circle"></i> Search
                                    results not found
                                </p>
                            </div>
                        )}
                        {currentItems && currentItems.length > 0 && (
                            <div className="customer-img">
                                <div className="row">
                                    {currentItems.map((value, i) => {
                                        return (
                                            <div
                                                className="col-md-3"
                                                key={i}
                                                onClick={() =>
                                                    navigate(value.href)
                                                }
                                            >
                                                <div className="grid">
                                                    <figure className="effect-goliath">
                                                        <img
                                                            src={
                                                                constants.STORAGE_BASE_URL +
                                                                value.image
                                                            }
                                                            alt="img23"
                                                        />
                                                        <figcaption>
                                                            <h2>
                                                                {value.title}
                                                            </h2>
                                                            <p>
                                                                {" "}
                                                                <Link
                                                                    to={
                                                                        value.href
                                                                    }
                                                                >
                                                                    View more{" "}
                                                                    <i className="fa fa-angle-right"></i>
                                                                </Link>
                                                            </p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
