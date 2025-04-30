import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ appData }) {
    return (
        <>
            <ul className="navbar-nav mr-auto navbar-right">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link
                        to="/products"
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        title="Products"
                    >
                        Products
                    </Link>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <div className="container">
                            <div className="row">
                                {appData.category_products &&
                                    appData.category_products.map(
                                        (value, i) => {
                                            return (
                                                <div
                                                    className="col-md-3"
                                                    key={i}
                                                >
                                                    <Link
                                                        to={`/products/${value.ca_slug}`}
                                                    >
                                                        <span className="text-uppercase text-white">
                                                            {value.ca_title}
                                                        </span>
                                                    </Link>
                                                    <ul className="nav flex-column">
                                                        {value.products &&
                                                            value.products.map(
                                                                (val, j) => {
                                                                    return (
                                                                        <li
                                                                            className="nav-item"
                                                                            key={
                                                                                j
                                                                            }
                                                                        >
                                                                            <Link
                                                                                className="nav-link"
                                                                                to={`/product/${value.ca_slug}/${val.prdt_slug}`}
                                                                            >
                                                                                {
                                                                                    val.prdt_title
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                }
                                                            )}
                                                        <li className="nav-item">
                                                            <Link
                                                                to={`/products/${value.ca_slug}`}
                                                            >
                                                                <span className="red">
                                                                    View All{" "}
                                                                    <i className="fa fa-angle-right"></i>
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>
                </li>

                <li className="nav-item dropdown one">
                    <Link
                        className="nav-link dropbtn dropdown-toggle applications"
                        to="/applications"
                        title="Applications"
                    >
                        Applications
                    </Link>
                    <ul className="dropdown-content app">
                        {appData.applications &&
                            appData.applications.map((value, i) => {
                                return (
                                    <li className="" key={i}>
                                        <Link
                                            to={`/applications/${value.app_slug}`}
                                        >
                                            {/* <img
                                                src="/images/round-img.webp"
                                                alt="Round Icon"
                                            /> */}
                                            {value.app_title}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about-us">
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/blog">
                        Blog
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/careers">
                        Careers
                    </Link>
                </li>
                <li></li>
            </ul>
        </>
    );
}
