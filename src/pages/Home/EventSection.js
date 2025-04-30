import React from "react";
import "./styles/EventSection.css";
import Slider from "react-slick";

export default function EventSection({ appData }) {
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
    };

    const events = [
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-01.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-02.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-03.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-04.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-05.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-06.webp",
        "images/events/india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients-07.webp",
    ];
    return (
        <>
            <div className="container" style={{ paddingTop: "40px" }}>
                <div className="col-md-12">
                    <div
                        style={{ marginBottom: "40px" }}
                        className="head-block text-center"
                    >
                        <h2 className="text-black">
                            We Join This{" "}
                            <span className="color-orange"> EVENTS</span>
                        </h2>
                    </div>
                </div>
                <div className="row align-items-center event-block no-gutters margin-40px-bottom">
                    <div className="col-lg-5 col-sm-12">
                        <div className="position-relative">
                            <Slider {...settings}>
                                {events.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <img
                                                src={value}
                                                alt="india-horeca-expo-2024-food-confluence-codissia-coimbatore-mevive-international-food-ingredients"
                                            />
                                        </div>
                                    );
                                })}
                            </Slider>

                            <div className="events-date">
                                <div className="font-size28">03</div>
                                <div className="font-size14">Jul</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <div className="padding-60px-lr md-padding-50px-lr sm-padding-30px-all xs-padding-25px-all pt-3">
                            <h5 className="margin-15px-bottom md-margin-10px-bottom font-size22 md-font-size20 xs-font-size18 font-weight-500">
                                India HoReCa & Food Confluence Expo 2024
                            </h5>
                            <ul className="event-time margin-10px-bottom md-margin-5px-bottom pt-3 pb-3">
                                <li>
                                    <i className="fa fa-calendar margin-10px-right"></i>{" "}
                                    July 3rd to 5th, 2024
                                </li>
                                <li>
                                    <i className="fa fa-building-o margin-10px-right"></i>{" "}
                                    Hall C, Block C14
                                </li>
                                <li>
                                    <i className="fa fa-map-marker margin-10px-right"></i>{" "}
                                    Codissia Trade Fair Complex, Coimbatore,
                                    Tamil Nadu, India.
                                </li>
                            </ul>
                            <p>
                                India HoReCa Expo is a statergic B2B platform
                                for suppliers to network, meet face-to-face and
                                build key relationships with key buyers and
                                decision makers of the hospitality and food
                                service industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
