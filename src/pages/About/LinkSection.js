import React from "react";
import { Link } from "react-router-dom";

export default function LinkSection() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 plr-0">
                        <div className="other-page-links">
                            <ul>
                                <li>
                                    <Link to="/contact-us">
                                        <img
                                            src="/images/other-link-img1.webp"
                                            alt="Contact"
                                        />
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers">
                                        <img
                                            src="/images/other-link-img2.webp"
                                            alt="Career"
                                        />
                                        Career
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq">
                                        <img
                                            src="/images/other-link-img3.webp"
                                            alt="Faq"
                                        />
                                        Faq
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
