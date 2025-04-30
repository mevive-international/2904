import React, { useState } from "react";
import DownloadBrochureModal from "../../modals/DownloadBrochureModal";
import DownloadProductListModal from "../../modals/DownloadProductListModal";

export default function DownloadSection() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const openModal1 = () => {
        setShowModal1(!showModal1);
    };
    const openModal2 = () => {
        setShowModal2(!showModal2);
    };

    return (
        <>
            <div className="row">
                <div
                    className="col-md-12 aos-init"
                    data-aos="fade-up"
                    data-aos-offset="100"
                >
                    <div className="download-broucher">
                        <div className="borucher-btn">
                            <button
                                className="btn btn-primary show-modal mr-2"
                                onClick={openModal1}
                            >
                                Download Brochure
                            </button>
                            <button
                                className="btn btn-primary show-modal"
                                onClick={openModal2}
                            >
                                Download Product List
                            </button>
                            <span>click the above link to download</span>
                            <DownloadBrochureModal
                                isOpen={showModal1}
                                toggle={openModal1}
                            />
                            <DownloadProductListModal
                                isOpen={showModal2}
                                toggle={openModal2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
