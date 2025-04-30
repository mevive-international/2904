import React from "react";
import { Link } from "react-router-dom";

export default function MoreTopics({ appData }) {
    const toSeoUrl = (url) => {
        return url
            .toString() // Convert to string
            .normalize("NFD") // Change diacritics
            .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
            .replace(/\s+/g, "-") // Change whitespace to dashes
            .toLowerCase() // Change to lowercase
            .replace(/&/g, "-and-") // Replace ampersand
            .replace(/[^a-z0-9\-]/g, "") // Remove anything that is not a letter, number or dash
            .replace(/-+/g, "-") // Remove duplicate dashes
            .replace(/^-*/, "") // Remove starting dashes
            .replace(/-*$/, ""); // Remove trailing dashes
    };

    return (
        <>
            <section className="blog-page tlp-more-topics">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-block text-center">
                                <h2 className="text-black">
                                    Explore{" "}
                                    <span className="color-orange">
                                        more topics
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="row tlp-more-topics__row">
                            {appData &&
                                appData.blog_explore &&
                                appData.blog_explore.map((value, i) => (
                                    <div className="col-md-4" key={i}>
                                        <Link
                                            to={`/blog-full/${toSeoUrl(
                                                value.prdt_title
                                            )}/${value.id}`}
                                        >
                                            <div
                                                className={`tlp-more-topics__row-item ${
                                                    i % 2 === 0
                                                        ? "color-scheme-1"
                                                        : "color-scheme-2"
                                                }`}
                                            >
                                                {value.prdt_title}
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                        </div>

                        <Link
                            to={`/blog-full/all/0`}
                            className="btn-primary text-white"
                        >
                            View More
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
