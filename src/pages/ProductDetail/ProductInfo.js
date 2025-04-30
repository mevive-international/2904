import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrintHtml from "../../utils/PrintHtml";
import ShareThis from "../../utils/ShareThis";
import GetQuoteModal from "../../modals/GetQuoteModal";
import { isMobile } from "react-device-detect";
import ProductImage from "./ProductImage";

export default function ProductInfo({ appData }) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    };

    const printProductTitle = (e) => {
        let title = e.split(" ");
        let html = "";
        switch (title.length) {
            case 2:
                html = `<h1 class="text-black">${title[0]} <span class="color-orange">${title[1]}</span></h1>`;
                break;
            case 3:
                html = `<h1 class="text-black">${title[0]} <span class="color-orange">${title[1]} ${title[2]}</span></h1>`;
                break;
            case 4:
                html = `<h1 class="text-black">${title[0]} ${title[1]} <span class="color-orange">${title[2]} ${title[3]}</span></h1>`;
                break;
            case 5:
                html = `<h1 class="text-black">${title[0]} ${title[1]} <span class="color-orange">${title[2]} ${title[3]} ${title[4]}</span></h1>`;
                break;
            case 6:
                html = `<h1 class="text-black">${title[0]} ${title[1]} ${title[2]} <span class="color-orange">${title[3]} ${title[4]} ${title[5]}</span></h1>`;
                break;
            case 7:
                html = `<h1 class="text-black">${title[0]} ${title[1]} ${title[2]} <span class="color-orange">${title[3]} ${title[4]} ${title[5]} ${title[6]}</span></h1>`;
                break;
            case 8:
                html = `<h1 class="text-black">${title[0]} ${title[1]} ${title[2]} ${title[3]} <span class="color-orange">${title[4]} ${title[5]} ${title[6]} ${title[7]}</span></h1>`;
                break;
            default:
                html = `<h1 class="text-black">${title}</h1>`;
                break;
        }
        return html;
    };
    return (
        <>
            {appData && appData.product && (
                <>
                    <div className="breadcrumbs-links">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products/">Products</Link>
                            </li>
                            <li>
                                <Link
                                    to={`/products/${appData.product[0].ca_slug}`}
                                >
                                    {appData.product[0].ca_title}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={`/product/${appData.product[0].ca_slug}/${appData.product[0].prdt_slug}`}
                                >
                                    {appData.product[0].prdt_title}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="product-content-container">
                        <div className="head-block">
                            <PrintHtml
                                html={printProductTitle(
                                    appData.product[0].prdt_title
                                )}
                            />
                        </div>
                        <p>{appData.product[0].prdt_subtitle}</p>
                        {isMobile && (
                            <ProductImage appData={appData} />
                        )}
                        <ul className={isMobile ? "pt-2" : ""}>
                            <h5>Features</h5>
                            {appData.feature &&
                                appData.feature.map((value, i) => {
                                    return (
                                        <li key={i}>
                                            <img
                                                src="/images/leaf-img.webp"
                                                alt="leaf"
                                            />
                                            {value.features}
                                        </li>
                                    );
                                })}
                        </ul>
                        <div className="pro-share-block mb-3">
                            <div className="__categories mb-3">
                                Category:
                                <span>{appData.product[0].ca_title}</span>
                            </div>
                            <ShareThis />
                        </div>

                        <button
                            className="btn btn-secondary show-modal"
                            onClick={openModal}
                        >
                            Get Price Quote <i className="fa fa-down-arrow"></i>
                        </button>
                        <GetQuoteModal isOpen={showModal} toggle={openModal} />
                    </div>
                </>
            )}
        </>
    );
}
