import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HeroSlider() {
    const style1 = {
        transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        pointerEvents: "none",
    };

    const style2 = {
        transform: "translate3d(0px, 0px, 0px)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "relative",
        display: "block",
        left: "0px",
        top: "0px",
    };

    const style3 = {
        transform: "translate3d(-2px, -0.7px, 0px)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        display: "block",
        left: "0px",
        top: "0px",
    };

    const style4 = {
        transform: "translate3d(-7.2px, -2.5px, 0px)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        display: "block",
        left: "0px",
        top: "0px",
    };

    const style5 = {
        transform: "translate3d(-6px, -2.1px, 0px)",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        position: "absolute",
        display: "block",
        left: "0px",
        top: "0px",
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <script src="js/jquery.parallax.min.js"></script>
                    <script src="js/snap.svg-min.js"></script>
                    <script src="js/slider.js"></script>
                    <script src="js/custom-hero-slider.js"></script>
                </Helmet>
            </HelmetProvider>
            <section className="hero-banner home">
                <div className="cd-slider-wrapper">
                    <ul
                        className="cd-slider"
                        data-step1="M1402,800h-2c0,0,0-213,0-423s0-377,0-377h1c0.6,0,1,0.4,1,1V800z"
                        data-step2="M1400,800H724c0,0-297-155-297-423C427,139,728,0,728,0h671c0.6,0,1,0.4,1,1V800z"
                        data-step3="M1400,800H0c0,0,1-213,1-423S1,0,1,0h1398c0.6,0,1,0.4,1,1V800z"
                        data-step4="M-2,800h2c0,0,0-213,0-423S0,0,0,0h-1c-0.6,0-1,0.4-1,1V800z"
                        data-step5="M0,800h676c0,0,297-155,297-423C973,139,672,0,672,0L1,0C0.4,0,0,0.4,0,1L0,800z"
                        data-step6="M0,800h1400c0,0-1-213-1-423s0-377,0-377L1,0C0.4,0,0,0.4,0,1L0,800z"
                    >
                        <li className="visible">
                            <Link to="products/spray-dried-fruit-powders">
                                <div className="cd-svg-wrapper">
                                    <div
                                        id="scene"
                                        className="other_layer"
                                        style={style1}
                                    >
                                        <img
                                            src="images/banner/bg2.webp"
                                            style={style2}
                                            alt="spray-dried-fruit-powders"
                                        />

                                        <img
                                            className="bnr2-el4"
                                            src="images/banner/element-04.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="spray-dried-fruit-powders"
                                        />
                                        <img
                                            className="bnr2-el6"
                                            src="images/banner/text-1.webp"
                                            data-depth="0.18"
                                            style={style4}
                                            alt="spray-dried-fruit-powders"
                                        />
                                        <img
                                            className="bnr2-el7"
                                            src="images/banner/element-07.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="spray-dried-fruit-powders"
                                        />
                                        <img
                                            className="bnr2-el5"
                                            src="images/banner/element-05.webp"
                                            data-depth="0.15"
                                            style={style5}
                                            alt="spray-dried-fruit-powders"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="products/dried-leaves-and-herbs">
                                <div className="cd-svg-wrapper">
                                    <div
                                        id="scene2"
                                        className="other_layer"
                                        style={style1}
                                    >
                                        <img
                                            src="images/banner/bg-2.webp"
                                            style={style2}
                                            alt="dried-leaves-and-herbs"
                                        />

                                        <img
                                            className="bnr2-el4"
                                            src="images/banner/b2-element1.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="dried-leaves-and-herbs"
                                        />
                                        <img
                                            className="bnr2-el6"
                                            src="images/banner/b2-element2.webp"
                                            data-depth="0.18"
                                            style={style4}
                                            alt="dried-leaves-and-herbs"
                                        />
                                        <img
                                            className="bnr2-el7"
                                            src="images/banner/b2-element3.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="dried-leaves-and-herbs"
                                        />
                                        <img
                                            className="bnr2-el5"
                                            src="images/banner/b2-element4.webp"
                                            data-depth="0.15"
                                            style={style5}
                                            alt="dried-leaves-and-herbs"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="products/dehydrated-vegetables">
                                <div className="cd-svg-wrapper">
                                    <div
                                        id="scene3"
                                        className="other_layer"
                                        style={style1}
                                    >
                                        <img
                                            src="images/banner/bg-3.webp"
                                            style={style2}
                                            alt="dehydrated-vegetables"
                                        />

                                        <img
                                            className="bnr2-el4"
                                            src="images/banner/b3-element1.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="dehydrated-vegetables"
                                        />
                                        <img
                                            className="bnr2-el6"
                                            src="images/banner/b3-element2.webp"
                                            data-depth="0.18"
                                            style={style4}
                                            alt="dehydrated-vegetables"
                                        />
                                        <img
                                            className="bnr2-el7"
                                            src="images/banner/b3-element3.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="dehydrated-vegetables"
                                        />
                                        <img
                                            className="bnr2-el5"
                                            src="images/banner/b3-element4.webp"
                                            data-depth="0.15"
                                            style={style5}
                                            alt="dehydrated-vegetables"
                                        />
                                    </div>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <a href="/products/spices">
                                <div className="cd-svg-wrapper">
                                    <div
                                        id="scene4"
                                        className="other_layer"
                                        style={style1}
                                    >
                                        <img
                                            src="images/banner/bg-4.webp"
                                            style={style2}
                                            alt="spices"
                                        />

                                        <img
                                            className="bnr2-el4"
                                            src="images/banner/b4-element1.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="spices"
                                        />
                                        <img
                                            className="bnr2-el6"
                                            src="images/banner/b4-element2.webp"
                                            data-depth="0.18"
                                            style={style4}
                                            alt="spices"
                                        />
                                        <img
                                            className="bnr2-el7"
                                            src="images/banner/b4-element3.webp"
                                            data-depth="0.05"
                                            style={style3}
                                            alt="spices"
                                        />
                                        <img
                                            className="bnr2-el5"
                                            src="images/banner/b4-element4.webp"
                                            data-depth="0.15"
                                            style={style5}
                                            alt="spices"
                                        />
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <ul className="cd-slider-navigation">
                        <li>
                            <Link to="#" className="prev-slide">
                                <i className="fa fa-angle-left"></i>
                            </Link>
                        </li>
                        <li className="cd-right-arrow">
                            <Link to="#" className="next-slide">
                                <i className="fa fa-angle-right"></i>
                            </Link>
                        </li>
                    </ul>

                    <ol className="cd-slider-controls">
                        <li className="selected">
                            <Link to="#">
                                <span>1</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span>2</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span>3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span>4</span>
                            </Link>
                        </li>
                    </ol>
                </div>
            </section>
        </>
    );
}
