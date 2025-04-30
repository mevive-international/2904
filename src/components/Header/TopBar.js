import React, { useState } from "react";
import GetQuoteModal from "../../modals/GetQuoteModal";
import SearchForm from "./SearchForm";

export default function TopBar() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <div className="menu-top">
                <ul className="social-links">
                    <li className="searchli">
                        <SearchForm />
                    </li>
                    <li>
                        <a href="tel:+91 7540073991">
                            <i className="fa fa-phone"></i>
                        </a>
                    </li>
                    <li className="contact-bar">
                        <a href="mailto:sales@meviveinternational.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.facebook.com/meviveinternational/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-facebook-f"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/company/mevive-international/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/meviveinternational/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/channel/UCG-bfLZuJFkomwqNMNvMnSg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-youtube-play"></i>
                        </a>
                    </li>
                    <li>
                        <button
                            className="btn btn-secondary"
                            onClick={openModal}
                        >
                            Get Price Quote
                        </button>
                    </li>
                </ul>
                <GetQuoteModal isOpen={showModal} toggle={openModal} />
            </div>
        </>
    );
}
