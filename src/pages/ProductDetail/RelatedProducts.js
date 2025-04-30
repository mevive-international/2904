import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";

export default function RelatedProducts({ appData }) {
    return (
        <>
            {appData.related_product && appData.related_product.length > 0 && (
                <div className="row">
                    <div className="col-md-12">
                        <div className="head-block">
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                }}
                                className="text-black"
                            >
                                Related{" "}
                                <span className="color-orange">Products </span>{" "}
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="related-products">
                            <ul>
                                {appData.related_product.map((value, i) => {
                                    return (
                                        <li key={i}>
                                            <Link
                                                to={`/product/${value.category.ca_slug}/${value.prdt_slug}`}
                                            >
                                                <img
                                                    width="100%"
                                                    height="133px"
                                                    src={
                                                        constants.STORAGE_BASE_URL +
                                                        value.prdt_image
                                                    }
                                                    alt={value.prdt_title}
                                                />
                                                <h5>{value.prdt_title}</h5>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
