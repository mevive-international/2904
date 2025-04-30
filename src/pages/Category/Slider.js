import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";
import Flickity from "react-flickity-component";

export default function Slider({ appData }) {
    const flickityOptions = {
        initialIndex: 0,
        wrapAround: true,
        autoPlay: true,
        contain: true,
    };

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Helmet>
            </HelmetProvider>
            <section className="slider">
                <div className="carousel-split-intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Flickity
                                    className={"carousel-split"}
                                    elementType={"div"}
                                    options={flickityOptions}
                                    disableImagesLoaded={true}
                                    reloadOnUpdate={true}
                                    static={true}
                                >
                                    {appData &&
                                        appData.category &&
                                        appData.category.map((value, i) => (
                                            <div
                                                className="carousel-split-cell"
                                                key={i}
                                            >
                                                <div className="carousel-split-cell-inner">
                                                    <div className="carousel-split-cell-inner-content">
                                                        <h3>
                                                            {value.ca_title}
                                                        </h3>
                                                        <PrintHtml
                                                            html={
                                                                value.ca_description
                                                            }
                                                        />
                                                    </div>
                                                    <div className="carousel-split-cell-inner-image">
                                                        <img
                                                            src={`${constants.APP_BASE_URL}${value.ca_image}`}
                                                            alt={value.ca_image_alt}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </Flickity>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
