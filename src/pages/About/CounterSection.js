import React from "react";

export default function CounterSection({ appData }) {
    return (
        <>
            {appData.about && (
                <section className="counter">
                    <div className="container">
                        <div className="stat">
                            <div
                                className="row aos-init"
                                data-aos="fade-up"
                                data-aos-offset="100"
                            >
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="milestone-counter">
                                        <img
                                            src="/images/icons/ico1.webp"
                                            alt="Experience Icon"
                                        />
                                        <span className="stat-count highlight">
                                            {appData.about[0].abt_experience}
                                        </span>
                                        <div className="milestone-details">
                                            Total years of Experience
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="milestone-counter">
                                        <img
                                            src="/images/icons/ico4.webp"
                                            alt="Clients Icon"
                                        />
                                        <span className="stat-count highlight">
                                            {appData.about[0].abt_client}
                                        </span>
                                        <div className="milestone-details">
                                            Happy Clients
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="milestone-counter">
                                        <img
                                            src="/images/icons/ico2.webp"
                                            alt="Products Icon"
                                        />
                                        <span className="stat-count highlight">
                                            {appData.about[0].abt_product}
                                        </span>
                                        <div className="milestone-details">
                                            Total range of products
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                    <div className="milestone-counter">
                                        <img
                                            src="/images/icons/ico3.webp"
                                            alt="Exports Icon"
                                        />
                                        <span className="stat-count highlight">
                                            {appData.about[0].abt_country}
                                        </span>
                                        <div className="milestone-details">
                                            Exports to countries around the
                                            world
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
