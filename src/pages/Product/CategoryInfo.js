import React, { useEffect, useState } from "react";
import PrintHtml from "../../utils/PrintHtml";
import constants from "../../config.json";
import GetQuoteModal from "../../modals/GetQuoteModal";
import ShareThis from "../../utils/ShareThis";

export default function CategoryInfo({ appData }) {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const openModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        if (appData && appData.category) {
            switch (appData.category.id) {
                case 1:
                    setTitle(
                        '<span class="color-orange">Dehydrated Vegetables</span><br/> Manufacturer in India'
                    );
                    break;
                case 2:
                    setTitle(
                        'Spray Dried <span class="color-orange">Fruit Powders</span><br/> Manufacturer in India'
                    );
                    break;
                case 3:
                    setTitle(
                        '<span class="color-orange">Dried Leaves and Herbs</span><br/> Manufacturer in India'
                    );
                    break;
                case 4:
                    setTitle(
                        '<span class="color-orange">Spice Powders</span><br/> Manufacturer in India'
                    );
                    break;
                default:
                    setTitle("Category Details");
                    break;
            }
        }
    }, [appData]);

    return (
        <>
            {appData && appData.category && (
                <section className="application-page-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="app-page-img">
                                    <img
                                        src={`${constants.APP_BASE_URL}${appData.category.ca_image}`}
                                        alt={appData.category.ca_image_alt}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="app-page-content">
                                    <h1 className="__name fw-600" dangerouslySetInnerHTML={{ __html: title ?? appData.category.ca_title }} />
                                    <PrintHtml
                                        html={appData.category.ca_description}
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
