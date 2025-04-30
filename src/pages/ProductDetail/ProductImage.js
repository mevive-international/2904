import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import constants from "../../config.json";

export default function ProductImage({ appData }) {
    return (
        <>
            {appData && appData.product_images && (
                <>
                    <HelmetProvider>
                        <Helmet>
                            <link
                                href="/css/jquery.exzoom.css"
                                rel="stylesheet"
                            />
                            <script src="/js/jquery.exzoom.js"></script>
                            <script src="/js/custom-exzoom.js"></script>
                        </Helmet>
                    </HelmetProvider>
                    <div className="zoom-container">
                        <div
                            className={`exzoom exzoom_product_slider_${window.location.pathname
                                .split("/")
                                .join("_")}`}
                        >
                            <div className="exzoom_img_box">
                                <ul className="exzoom_img_ul">
                                    {appData.product_images.map((value, i) => {
                                        return (
                                            <li key={i}>
                                                <img
                                                    src={
                                                        constants.STORAGE_BASE_URL +
                                                        value.prdt_img_image
                                                    }
                                                    alt={
                                                        value.prdt_img_alt ??
                                                        value.prdt_img_title
                                                    }
                                                    className="img-fluid"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="exzoom_nav"></div>
                            <p className="exzoom_btn">
                                <Link to="#" className="exzoom_prev_btn">
                                    {" "}
                                    <span className="fa fa-angle-left">
                                        {" "}
                                    </span>{" "}
                                </Link>
                                <Link to="#" className="exzoom_next_btn">
                                    {" "}
                                    <span className="fa fa-angle-right">
                                        {" "}
                                    </span>{" "}
                                </Link>
                            </p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
