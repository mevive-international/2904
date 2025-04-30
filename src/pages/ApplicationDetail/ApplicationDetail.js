import React, { useState } from "react";
import PrintHtml from "../../utils/PrintHtml";
import constants from "../../config.json";
import GetQuoteModal from "../../modals/GetQuoteModal";
import ShareThis from "../../utils/ShareThis";

export default function ApplicationDetail({ appData }) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            {appData && appData.application_details && (
                <section className="application-page-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="app-page-img">
                                    <img
                                        src={`${constants.APP_BASE_URL}${appData.application_details[0].app_de_image}`}
                                        alt={
                                            appData.application_details[0]
                                                .app_de_image_alt
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="app-page-content">
                                    <h1 className="__name fw-600">
                                        <span className="color-orange">
                                            {
                                                appData.application_details[0]
                                                    .app_title
                                            }{" "}
                                            Ingredients
                                        </span><br/>
                                        Manufacturer in India
                                    </h1>
                                    <PrintHtml
                                        html={
                                            appData.application_details[0]
                                                .app_de_description
                                        }
                                    />
                                    <div className="pro-share-block">
                                        <ShareThis />
                                    </div>
                                    <button
                                        className="btn btn-secondary show-modal"
                                        onClick={openModal}
                                    >
                                        Enquire Now{" "}
                                        <i className="fa fa-down-arrow"></i>
                                    </button>
                                    <GetQuoteModal
                                        isOpen={showModal}
                                        toggle={openModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
