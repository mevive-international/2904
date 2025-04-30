import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchModal from "../../modals/SearchModal";

export default function MobileSearch() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <Link
                to="#"
                className="search-icon d-md-block d-block d-lg-block"
                onClick={openModal}
            >
                {" "}
                <i className="fa fa-search"></i>
            </Link>
            <SearchModal isOpen={showModal} toggle={openModal} />
        </>
    );
}
