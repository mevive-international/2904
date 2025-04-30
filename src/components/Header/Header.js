/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidePanel from "./SidePanel";
import "../../styles/header.css";
import TopBar from "./TopBar";
import Menu from "./Menu";
import MobileSearch from "./MobileSearch";

export default function Header({ appData, loading, isDarkHeader }) {
    const location = useLocation();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 10);
        });
        return () => {
            setScroll({});
        };
    }, []);

    return (
        <>
            {!loading && (
                <header
                    className={`header one sticky ${scroll ? "fixed" : ""} ${
                        isDarkHeader ? "header-dark" : ""
                    } ${location.pathname === "/" ? "home-page-header" : ""}`}
                >
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <Link
                                className={scroll ? "sml-logo" : "lrg-logo"}
                                to="/"
                            >
                                <img
                                    src={
                                        isDarkHeader
                                            ? "/images/logo-dark.webp"
                                            : "/images/logo.webp"
                                    }
                                    className="img-fluid mobile_home_low_logo"
                                    alt="Logo"
                                />
                                <img
                                    src="/images/logo-dark.webp"
                                    className="img-fluid mobile_home_dark_logo"
                                    alt="Logo"
                                />
                            </Link>

                            <MobileSearch />

                            <SidePanel appData={appData} />

                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <div className="menu-block">
                                    <TopBar />
                                    <Menu appData={appData} />
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            )}
        </>
    );
}
