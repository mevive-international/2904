import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrintHtml from "../../utils/PrintHtml";

export default function ProductDetails({ appData }) {
    const { slug, product } = useParams();
    const [activeTab, setActiveTab] = useState(1);
    const [isOpen, setIsOpen] = useState("");

    useEffect(() => {
        setActiveTab(1);
    }, [product, slug]);

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const handleToggle = (id) => {
        setIsOpen(isOpen === id ? "" : id);
    };

    return (
        <>
            {appData && appData.product && (
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-tab">
                            <ul className="tabs">
                                <li
                                    className={`tab-link ${
                                        activeTab === 1 ? "current" : ""
                                    }`}
                                    onClick={() => toggle(1)}
                                >
                                    Description
                                </li>
                                <li
                                    className={`tab-link ${
                                        activeTab === 2 ? "current" : ""
                                    }`}
                                    onClick={() => toggle(2)}
                                >
                                    Specification
                                </li>
                                <li
                                    className={`tab-link ${
                                        activeTab === 3 ? "current" : ""
                                    }`}
                                    onClick={() => toggle(3)}
                                >
                                    Related Questions
                                </li>
                            </ul>

                            {activeTab === 1 && (
                                <div
                                    className={`tab-content ${
                                        activeTab === 1 ? "current" : ""
                                    }`}
                                >
                                    <div className="desc-cont">
                                        <PrintHtml
                                            html={
                                                appData.product[0]
                                                    .prdt_description
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div
                                    className={`tab-content ${
                                        activeTab === 2 ? "current" : ""
                                    }`}
                                >
                                    <div className="specs-cont">
                                        <div className="specs-table description-table">
                                            <table className="table-responsive">
                                                <tbody>
                                                    {appData.sepc &&
                                                        appData.sepc.map(
                                                            (value, i) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <td>
                                                                            {
                                                                                value.spec_title
                                                                            }
                                                                        </td>
                                                                        <td>
                                                                            {
                                                                                value.spec_detail
                                                                            }
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            }
                                                        )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 3 && (
                                <div
                                    className={`tab-content ${
                                        activeTab === 3 ? "current" : ""
                                    }`}
                                >
                                    <div className="accordian-toogle">
                                        <div
                                            id="accordion"
                                            className="accordion-container"
                                        >
                                            {appData.relat_qus &&
                                                appData.relat_qus.map(
                                                    (value, i) => {
                                                        return (
                                                            <article
                                                                className="content-entry"
                                                                key={i}
                                                                onClick={() =>
                                                                    handleToggle(
                                                                        value.id
                                                                    )
                                                                }
                                                            >
                                                                <h4 className="article-title">
                                                                    <i></i>
                                                                    {
                                                                        value.requ_question
                                                                    }
                                                                </h4>
                                                                <div
                                                                    className={
                                                                        isOpen ===
                                                                        value.id
                                                                            ? "accordion-content show"
                                                                            : "accordion-content"
                                                                    }
                                                                >
                                                                    {
                                                                        value.requ_answer
                                                                    }
                                                                </div>
                                                            </article>
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
