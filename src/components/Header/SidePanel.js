/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GetQuoteModal from "../../modals/GetQuoteModal";

export default function SidePanel({ appData }) {
    const myRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [appMenuOpen, setAppMenuOpen] = useState(false);
    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const [productSubMenuItem, setProductSubMenuItem] = useState("");

    const toggleAppMenu = () => setAppMenuOpen((prevState) => !prevState);
    const toggleProductMenu = () =>
        setProductMenuOpen((prevState) => !prevState);

    const toggleProductSubMenu = (key) => {
        let value = productSubMenuItem === key ? "" : key;
        setProductSubMenuItem(value);
    };

    useEffect(() => {
        switch (true) {
            case location.pathname.startsWith("/product"):
                setProductMenuOpen(true);
                break;
            case location.pathname.startsWith("/applications"):
                setAppMenuOpen(true);
                break;
            default:
                break;
        }
    }, [location]);

    const toggleLinkNav = () => {
        setSidebar(false);
        setAppMenuOpen(false);
        setProductMenuOpen(false);
        setProductSubMenuItem("");
    };

    const toggleNav = () => {
        setSidebar(!sidebar);
    };

    const openModal = () => {
        setSidebar(false);
        setShowModal(!showModal);
    };

    const openProductLink = (slug) => {
        setSidebar(false);
        navigate(`/products/${slug}`);
    };

    const handleClickOutside = (e) => {
        if (myRef.current && !myRef.current.contains(e.target)) {
            setSidebar(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    });

    return (
        <>
            <button className="openbtn" onClick={toggleNav}>
                {" "}
                <span className="fa fa-bars"></span>
            </button>

            <div
                ref={myRef}
                id="mySidepanel"
                className="sidepanel"
                style={sidebar ? { width: "250px" } : { width: "0px" }}
            >
                <button
                    className="btn btn-link text-white closebtn"
                    onClick={toggleNav}
                >
                    ×
                </button>
                <Link to="/" onClick={toggleLinkNav}>
                    Home
                </Link>
                <button
                    className={
                        productMenuOpen ? "dropdown-btn active" : "dropdown-btn"
                    }
                >
                    <span onClick={() => navigate(`/products`)}>Products</span>
                    <i
                        className="fa fa-caret-down"
                        onClick={toggleProductMenu}
                    ></i>
                </button>
                <div
                    className="dropdown-container"
                    style={
                        productMenuOpen
                            ? { display: "block" }
                            : { display: "none" }
                    }
                >
                    {appData.category_products &&
                        appData.category_products.map((value, i) => {
                            return (
                                <div key={i}>
                                    <button
                                        className={
                                            productSubMenuItem === i
                                                ? "dropdown-btn active"
                                                : "dropdown-btn"
                                        }
                                    >
                                        <span
                                            onClick={() =>
                                                openProductLink(value.ca_slug)
                                            }
                                        >
                                            {value.ca_title}
                                        </span>
                                        <i
                                            className="fa fa-caret-down"
                                            onClick={() =>
                                                toggleProductSubMenu(i)
                                            }
                                        ></i>
                                    </button>
                                    <div
                                        className="dropdown-container"
                                        style={
                                            productSubMenuItem === i
                                                ? { display: "block" }
                                                : { display: "none" }
                                        }
                                    >
                                        {value.products &&
                                            value.products.map((val, j) => {
                                                return (
                                                    <Link
                                                        key={j}
                                                        to={`/product/${value.ca_slug}/${val.prdt_slug}`}
                                                        onClick={toggleLinkNav}
                                                    >
                                                        {val.prdt_title}
                                                    </Link>
                                                );
                                            })}
                                        <Link
                                            to={`/products/${value.ca_slug}`}
                                            onClick={toggleLinkNav}
                                        >
                                            <span className="red">
                                                View All{" "}
                                                <i className="fa fa-angle-right"></i>{" "}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                </div>

                <button
                    className={
                        appMenuOpen ? "dropdown-btn active" : "dropdown-btn"
                    }
                >
                    <span onClick={() => navigate(`/applications`)}>
                        Applications
                    </span>
                    <i className="fa fa-caret-down" onClick={toggleAppMenu}></i>
                </button>

                <div
                    className="dropdown-container"
                    style={
                        appMenuOpen ? { display: "block" } : { display: "none" }
                    }
                >
                    {appData.applications &&
                        appData.applications.map((value, i) => {
                            return (
                                <Link
                                    key={i}
                                    to={`/applications/${value.app_slug}`}
                                    onClick={toggleLinkNav}
                                >
                                    {value.app_title}
                                </Link>
                            );
                        })}
                </div>

                <Link
                    className="nav-link"
                    to="/about-us"
                    onClick={toggleLinkNav}
                >
                    About
                </Link>

                <Link
                    className="nav-link"
                    to="/contact-us"
                    onClick={toggleLinkNav}
                >
                    Contact
                </Link>
                <Link className="nav-link" to="/blog" onClick={toggleLinkNav}>
                    Blog
                </Link>

                <Link
                    className="nav-link"
                    to="/careers"
                    onClick={toggleLinkNav}
                >
                    Careers
                </Link>
                <button
                    className="btn btn-secondary show-modal mt-3"
                    onClick={openModal}
                >
                    Get Price Quote
                </button>
                <GetQuoteModal isOpen={showModal} toggle={openModal} />
            </div>
        </>
    );
}
