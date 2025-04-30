import React, { useState } from "react";
import FreeSampleModal from "../../modals/FreeSampleModal";

export default function FreeSample() {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <div className="sticky-enquiry">
                <ul>
                    <li>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={openModal}
                        >
                            Order Free Samples
                        </button>
                    </li>
                </ul>
            </div>
            <FreeSampleModal isOpen={showModal} toggle={openModal} />
        </>
    );
}
