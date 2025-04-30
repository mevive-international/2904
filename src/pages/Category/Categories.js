import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";

export default function Categories({ appData }) {
    return (
        <>
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        {appData &&
                            appData.category &&
                            appData.category.map((value, i) => (
                                <div className="col-md-6" key={i}>
                                    <Link to={`/products/${value.ca_slug}`}>
                                        <figure className="snip1361">
                                            <img
                                                className="img-fluid"
                                                width="100%"
                                                src={`${constants.APP_BASE_URL}${value.ca_image}`}
                                                alt={value.ca_image_alt}
                                            />
                                            <figcaption>
                                                <h2>{value.ca_title}</h2>
                                            </figcaption>
                                        </figure>
                                        <button className="btn btn-primary">
                                            Read More
                                        </button>{" "}
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
}
