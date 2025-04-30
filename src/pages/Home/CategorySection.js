import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default function CategorySection({ appData }) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "40px",
                    dots: true,
                },
            },
        ],
    };

    const getSlug = (key) => {
        if (
            typeof appData.category_products !== "undefined" &&
            typeof appData.category_products[key] !== "undefined"
        ) {
            const category_products = appData.category_products;
            return category_products[key].ca_slug;
        } else {
            return "";
        }
    };

    return (
        <>
            <section className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head-block text-center">
                                <h2 className="text-black">
                                    Browse by{" "}
                                    <span className="color-orange">
                                        Category
                                    </span>
                                </h2>
                            </div>
                            <div className="category-inner">
                                {isMobile && (
                                    <Slider {...settings}>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dehydrated Vegetables"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dehydrated Vegetables
                                                </h1>
                                                <p className="para">
                                                    Wandering a way back to the
                                                    survival of numerous
                                                    cultures where sun and wind
                                                    naturally favoured food
                                                    preservation.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dehydrated Garlic</li>
                                                    <li>Dehydrated Onion</li>
                                                    <li>Dehydrated Carrot</li>
                                                    <li>Dehydrated Capsicum</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        0
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/spice-powders-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/spice-powders-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spices"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spice Powders
                                                </h1>
                                                <p className="para">
                                                    Retracing the foot stamps of
                                                    human civilization, regional
                                                    cuisine incorporated spices
                                                    as they were readily
                                                    available.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Red Chilli Powder</li>
                                                    <li>
                                                        Coriander Seeds Powder
                                                    </li>
                                                    <li>Turmeric Powder</li>
                                                    <li>Pepper Powder</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        3
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/fruit-powders-spray-dried-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/fruit-powders-spray-dried-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spray Dried Fruit Powders"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spray Dried Fruit Powders
                                                </h1>
                                                <p className="para">
                                                    Limber up to bounce into the
                                                    fascinating flavoured
                                                    timeline of extracting the
                                                    natural essence to inflate
                                                    and amplify the aroma plus
                                                    taste of fresh fruits.{" "}
                                                </p>

                                                <ul className="category-list">
                                                    <li>
                                                        Spray Dried Mango Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Banana
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Black Grape
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Honey Powder
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        1
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dried-leaves-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dried-leaves-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dried Leaves and Herbs"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dried Leaves and Herbs
                                                </h1>
                                                <p className="para">
                                                    Hovering over the market, no
                                                    matter they are always
                                                    driven to unlock
                                                    contemporary consumption of
                                                    food with flavour dynamics.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dried Curry Leaves</li>
                                                    <li>Dried Mint Leaves</li>
                                                    <li>Dried Chives</li>
                                                    <li>
                                                        Dried Parsley Leaves
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        2
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dehydrated Vegetables"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dehydrated Vegetables
                                                </h1>
                                                <p className="para">
                                                    Wandering a way back to the
                                                    survival of numerous
                                                    cultures where sun and wind
                                                    naturally favoured food
                                                    preservation.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dehydrated Garlic</li>
                                                    <li>Dehydrated Onion</li>
                                                    <li>Dehydrated Carrot</li>
                                                    <li>Dehydrated Capsicum</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        0
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/spice-powders-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/spice-powders-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spices"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spice Powders
                                                </h1>
                                                <p className="para">
                                                    Retracing the foot stamps of
                                                    human civilization, regional
                                                    cuisine incorporated spices
                                                    as they were readily
                                                    available.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Red Chilli Powder</li>
                                                    <li>
                                                        Coriander Seeds Powder
                                                    </li>
                                                    <li>Turmeric Powder</li>
                                                    <li>Pepper Powder</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        3
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/fruit-powders-spray-dried-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/fruit-powders-spray-dried-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spray Dried Fruit Powders"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spray Dried Fruit Powders
                                                </h1>
                                                <p className="para">
                                                    Limber up to bounce into the
                                                    fascinating flavoured
                                                    timeline of extracting the
                                                    natural essence to inflate
                                                    and amplify the aroma plus
                                                    taste of fresh fruits.{" "}
                                                </p>

                                                <ul className="category-list">
                                                    <li>
                                                        Spray Dried Mango Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Banana
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Black Grape
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Honey Powder
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        1
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dried-leaves-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dried-leaves-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dried Leaves and Herbs"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dried Leaves and Herbs
                                                </h1>
                                                <p className="para">
                                                    Hovering over the market, no
                                                    matter they are always
                                                    driven to unlock
                                                    contemporary consumption of
                                                    food with flavour dynamics.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dried Curry Leaves</li>
                                                    <li>Dried Mint Leaves</li>
                                                    <li>Dried Chives</li>
                                                    <li>
                                                        Dried Parsley Leaves
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        2
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                    </Slider>
                                )}
                                {!isMobile && (
                                    <Slider {...settings}>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/spice-powders-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/spice-powders-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spices"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spice Powders
                                                </h1>
                                                <p className="para">
                                                    Retracing the foot stamps of
                                                    human civilization, regional
                                                    cuisine incorporated spices
                                                    as they were readily
                                                    available.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Red Chilli Powder</li>
                                                    <li>
                                                        Coriander Seeds Powder
                                                    </li>
                                                    <li>Turmeric Powder</li>
                                                    <li>Pepper Powder</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        3
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dehydrated Vegetables"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dehydrated Vegetables
                                                </h1>
                                                <p className="para">
                                                    Wandering a way back to the
                                                    survival of numerous
                                                    cultures where sun and wind
                                                    naturally favoured food
                                                    preservation.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dehydrated Garlic</li>
                                                    <li>Dehydrated Onion</li>
                                                    <li>Dehydrated Carrot</li>
                                                    <li>Dehydrated Capsicum</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        0
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/fruit-powders-spray-dried-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/fruit-powders-spray-dried-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spray Dried Fruit Powders"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spray Dried Fruit Powders
                                                </h1>
                                                <p className="para">
                                                    Limber up to bounce into the
                                                    fascinating flavoured
                                                    timeline of extracting the
                                                    natural essence to inflate
                                                    and amplify the aroma plus
                                                    taste of fresh fruits.{" "}
                                                </p>

                                                <ul className="category-list">
                                                    <li>
                                                        Spray Dried Mango Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Banana
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Black Grape
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Honey Powder
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        1
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dried-leaves-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dried-leaves-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dried Leaves and Herbs"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dried Leaves and Herbs
                                                </h1>
                                                <p className="para">
                                                    Hovering over the market, no
                                                    matter they are always
                                                    driven to unlock
                                                    contemporary consumption of
                                                    food with flavour dynamics.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dried Curry Leaves</li>
                                                    <li>Dried Mint Leaves</li>
                                                    <li>Dried Chives</li>
                                                    <li>
                                                        Dried Parsley Leaves
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        2
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/spice-powders-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/spice-powders-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spices"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spice Powders
                                                </h1>
                                                <p className="para">
                                                    Retracing the foot stamps of
                                                    human civilization, regional
                                                    cuisine incorporated spices
                                                    as they were readily
                                                    available.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Red Chilli Powder</li>
                                                    <li>
                                                        Coriander Seeds Powder
                                                    </li>
                                                    <li>Turmeric Powder</li>
                                                    <li>Pepper Powder</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        3
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dehydrated-vegetables-flakes-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dehydrated Vegetables"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dehydrated Vegetables
                                                </h1>
                                                <p className="para">
                                                    Wandering a way back to the
                                                    survival of numerous
                                                    cultures where sun and wind
                                                    naturally favoured food
                                                    preservation.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dehydrated Garlic</li>
                                                    <li>Dehydrated Onion</li>
                                                    <li>Dehydrated Carrot</li>
                                                    <li>Dehydrated Capsicum</li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        0
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/fruit-powders-spray-dried-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/fruit-powders-spray-dried-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Spray Dried Fruit Powders"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Spray Dried Fruit Powders
                                                </h1>
                                                <p className="para">
                                                    Limber up to bounce into the
                                                    fascinating flavoured
                                                    timeline of extracting the
                                                    natural essence to inflate
                                                    and amplify the aroma plus
                                                    taste of fresh fruits.{" "}
                                                </p>

                                                <ul className="category-list">
                                                    <li>
                                                        Spray Dried Mango Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Banana
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Black Grape
                                                        Powder
                                                    </li>
                                                    <li>
                                                        Spray Dried Honey Powder
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        1
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="category-single">
                                            <div className="category-image">
                                                <picture>
                                                    <source
                                                        media="(min-width:768px)"
                                                        srcSet="images/category/thumb1/dried-leaves-powder-mevive.webp"
                                                    />
                                                    <img
                                                        src="images/category/thumb2/dried-leaves-powder-mevive.webp"
                                                        className="img-fluid"
                                                        alt="Dried Leaves and Herbs"
                                                    />
                                                </picture>
                                            </div>
                                            <div className="category-content">
                                                <h1 className="h2 font-weight-bold">
                                                    Dried Leaves and Herbs
                                                </h1>
                                                <p className="para">
                                                    Hovering over the market, no
                                                    matter they are always
                                                    driven to unlock
                                                    contemporary consumption of
                                                    food with flavour dynamics.
                                                </p>

                                                <ul className="category-list">
                                                    <li>Dried Curry Leaves</li>
                                                    <li>Dried Mint Leaves</li>
                                                    <li>Dried Chives</li>
                                                    <li>
                                                        Dried Parsley Leaves
                                                    </li>
                                                </ul>
                                                <Link
                                                    to={`products/${getSlug(
                                                        2
                                                    )}`}
                                                    className="show-all"
                                                >
                                                    Show All
                                                </Link>
                                            </div>
                                        </div>
                                    </Slider>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
