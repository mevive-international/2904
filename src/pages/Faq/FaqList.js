import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import PrintHtml from "../../utils/PrintHtml";

export default function FaqList({ appData }) {
    const [isOpen, setIsOpen] = useState("");

    const handleToggle = (id) => {
        setIsOpen(isOpen === id ? "" : id);
    };

    return (
        <>
            <section className="certificate-sec" style={{ background: "none" }}>
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 aos-init"
                            data-aos="fade-right"
                            data-aos-offset="300"
                        >
                            <div className="certify-cont">
                                <div className="head-block">
                                    <h2
                                        style={{ textAlign: "center" }}
                                        className="text-black"
                                    >
                                        Frequently{" "}
                                        <span className="color-orange">
                                            Asked{" "}
                                        </span>
                                        Questions
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {appData &&
                                appData.faq &&
                                appData.faq.map((value, i) => (
                                    <Card key={i}>
                                        <CardHeader
                                            onClick={() =>
                                                handleToggle(value.id)
                                            }
                                        >
                                            <h4 className="card-title">
                                                <Link
                                                    to="#"
                                                    className={
                                                        isOpen === value.id
                                                            ? ""
                                                            : "collapsed"
                                                    }
                                                >
                                                    {value.faq_question}
                                                </Link>
                                            </h4>
                                        </CardHeader>
                                        <Collapse isOpen={isOpen === value.id}>
                                            <CardBody>
                                                <PrintHtml
                                                    html={value.faq_answer}
                                                />
                                            </CardBody>
                                        </Collapse>
                                    </Card>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
