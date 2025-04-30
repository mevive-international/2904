import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./styles/HotProductSection.css";

export default function HotProductSection({ appData }) {
    const owlConfig = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 2,
            },
            480: {
                items: 2,
            },
            600: {
                items: 3,
            },
            767: {
                items: 3,
            },
            991: {
                items: 5,
            },
            1200: {
                items: 5,
            },
        },
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
    };
    return (
        <>
            <section className="products-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-block text-center">
                                <h2 className="text-black">
                                    Hot{" "}
                                    <span className="color-orange">
                                        Products
                                    </span>
                                </h2>
                                <span className="sub-head">
                                    Our Top-Selling Ingredients &amp; New Stocks
                                </span>
                            </div>
                            <div className="products-block">
                                {appData.hotproducts && (
                                    <OwlCarousel
                                        className="hot-carousel owl-theme"
                                        {...owlConfig}
                                    >
                                        {appData.hotproducts.map((value, i) => {
                                            return (
                                                <div className="item" key={i}>
                                                    <Link
                                                        to={`/product/${value.category.ca_slug}/${value.prdt_slug}`}
                                                    >
                                                        <img
                                                            src={
                                                                constants.STORAGE_BASE_URL +
                                                                value.prdt_image
                                                            }
                                                            alt={
                                                                value.prdt_title
                                                            }
                                                            className="img-fluid"
                                                        />
                                                        <h5>
                                                            {value.prdt_title}
                                                        </h5>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </OwlCarousel>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
