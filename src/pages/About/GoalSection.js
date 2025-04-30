import React from "react";
import PrintHtml from "../../utils/PrintHtml";

export default function GoalSection({ appData }) {
    return (
        <>
            {appData.about && (
                <section className="goals-sec">
                    <div className="container-fluid">
                        <div
                            className="row aos-init"
                            data-aos="fade-up"
                            data-aos-offset="100"
                        >
                            <div className="col-md-4 plr-0 equal">
                                <div className="goal-det goal-color-1">
                                    <img
                                        src="/images/icons/goal-img1.webp"
                                        alt="Mission"
                                    />
                                    <h5>Mission</h5>
                                    <PrintHtml
                                        html={appData.about[0].abt_mission}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 plr-0 equal">
                                <div className="goal-det goal-color-2">
                                    <img
                                        src="/images/icons/goal-img2.webp"
                                        alt="Vision"
                                    />
                                    <h5>Vision</h5>
                                    <PrintHtml
                                        html={appData.about[0].abt_vision}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 plr-0 equal">
                                <div className="goal-det goal-color-3">
                                    <img
                                        src="/images/icons/goal-img3.webp"
                                        alt="Value"
                                    />
                                    <h5>Value</h5>
                                    <PrintHtml
                                        html={appData.about[0].abt_value}
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
