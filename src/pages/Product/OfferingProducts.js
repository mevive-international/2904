import React, { useEffect, useState } from "react";
import constants from "../../config.json";
import { Link, useNavigate } from "react-router-dom";

export default function OfferingProducts({ appData, slug }) {
    const navigate = useNavigate();
    const [isActive, setActive] = useState(false);
    useEffect(() => {
        setActive(false);
    }, [slug]);
    const ShowButton = () => {
        setActive(!isActive);
    };

    const openProductLink = (event, product_slug) => {
        let url = `/product/${slug}/${product_slug}`;
        if (event.ctrlKey || event.button === 1) {
            event.preventDefault();
            window.open(url, "_blank");
        } else if (event.type === "click") {
            navigate(url);
        }
    };

    const openProductLinkNewWindow = (product_slug) => {
        let url = `/product/${slug}/${product_slug}`;
        window.open(url, "_blank");
    };

    return (
        <>
            {appData && appData.product && (
                <section className="dehydrated product-offering-products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    style={{
                                        marginBottom: "0px",
                                        marginTop: "40px",
                                    }}
                                    className="head-block text-center aos-init aos-animate"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Our Offering{" "}
                                        <span className="color-orange">
                                            Products
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            <div className="customer-img">
                                <ul
                                    className={`text ${
                                        isActive ? "" : "show-more-height"
                                    }`}
                                >
                                    <div className="row container ml-0 pl-0 ml-0 pr-0">
                                        {appData.product.map((value, i) => (
                                            <div
                                                className="col-md-3"
                                                key={i}
                                                onMouseDown={(event) =>
                                                    event.button === 1
                                                        ? openProductLinkNewWindow(
                                                              value.prdt_slug
                                                          )
                                                        : ""
                                                }
                                                onClick={(event) =>
                                                    openProductLink(
                                                        event,
                                                        value.prdt_slug
                                                    )
                                                }
                                            >
                                                <div className="grid">
                                                    <figure className="effect-goliath">
                                                        <img
                                                            src={`${constants.APP_BASE_URL}${value.prdt_image}`}
                                                            alt={
                                                                value.prdt_title
                                                            }
                                                        />
                                                        <figcaption>
                                                            <h2>
                                                                <Link
                                                                    to={`/product/${slug}/${value.prdt_slug}`}
                                                                >
                                                                    {
                                                                        value.prdt_title
                                                                    }
                                                                </Link>
                                                            </h2>
                                                            <p>
                                                                {" "}
                                                                <Link
                                                                    to={`/product/${slug}/${value.prdt_slug}`}
                                                                    className="product-offering-products-view-more"
                                                                >
                                                                    View more{" "}
                                                                    <i className="fa fa-angle-right"></i>
                                                                </Link>
                                                            </p>
                                                        </figcaption>
                                                    </figure>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                                <button
                                    onClick={ShowButton}
                                    className="btn btn-primary show-more"
                                >
                                    {isActive ? "View Less" : "View More"}
                                    <i className="fa fa-down-arrow"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
