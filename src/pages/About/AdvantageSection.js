import React, { useState } from "react";
import { Collapse, CardBody, Card, CardHeader } from "reactstrap";
import PrintHtml from "../../utils/PrintHtml";
import "./styles/AdvantageSection.css";

export default function AdvantageSection() {
    const [isOpen, setIsOpen] = useState("");
    const lists = [
        {
            id: "1",
            name: "Procurement",
            desc: " <p>We have regular alliances in the finest and the most fertile growing regions, which allows us to forecast, speculate and make the make decisions at the right time which helps us supply our customers the top-notch quality ingredients throughout the year. We do not depend on any intermediaries or brokers for procurement. Sourcing is done under the strict supervision of our in-house team of experienced and certified professionals.</p>",
        },
        {
            id: "2",
            name: "Mevive Quality",
            desc: "<b>“Quality is Our Commitment and Our Customer's right.” </b><br/>Our approach when it comes to Quality has redefined its standards in the Domestic & Global market. We ensure that the Quality of our products is not compromised at any cost. We are approved by the certification bodies.",
        },
        {
            id: "3",
            name: "Business Philosophy",
            desc: "Mevive International is a prestigious business entity who has the Vision to redefine the market standards in Quality and Customer Satisfaction. Our Business Philosophy unlike other corporate mantras is just plain and simple - We are 'Quality Centric'. We believe that our responsibility and commitment towards our Alliances/Partners, Investors, Customers are never-ending and hence we take pride in saying: “In the Business of Quality and Customer Satisfaction”",
        },
    ];

    const handleToggle = (id) => {
        setIsOpen(isOpen === id ? "" : id);
    };

    return (
        <>
            <section className="advantages">
                <div className="container">
                    <div className="col-md-12">
                        <div
                            style={{ paddingBottom: "50px" }}
                            className="head-block text-center"
                        >
                            <h2 className="text-black">
                                Mevive{" "}
                                <span className="color-orange">Advantage</span>
                            </h2>
                            <p>
                                We are bestowed with an advanced, robust and
                                reliable network of infrastructure facilities
                                across the globe. Our access to strategic
                                customer locations have improved with our new
                                Sales Office & Warehouse established in Dubai,
                                UAE.
                            </p>
                        </div>
                        <div className="col-md-12">
                            <h3
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Our Strength?
                            </h3>

                            {lists.map((list) => (
                                <Card key={list.id}>
                                    <CardHeader
                                        onClick={() => handleToggle(list.id)}
                                    >
                                        <h4 className="card-title">
                                            <div
                                                className={
                                                    isOpen === list.id
                                                        ? ""
                                                        : "collapsed"
                                                }
                                            >
                                                {list.name}
                                            </div>
                                        </h4>
                                    </CardHeader>
                                    <Collapse isOpen={isOpen === list.id}>
                                        <CardBody>
                                            <PrintHtml html={list.desc} />
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
