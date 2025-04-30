import React from "react";
import JobDetail from "./JobDetail";
import ConnectHr from "./ConnectHr";
import CandidateApply from "./CandidateApply";

export default function CareerDetail({ appData }) {
    return (
        <>
            <section className="home-career">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8 mx-auto">
                            <JobDetail appData={appData} />
                        </div>
                        <div className="col-md-10 col-lg-4 mx-auto">
                            <div className="single-candidate-bottom-right">
                                {appData && appData.career_details && (
                                    <>
                                        <ConnectHr />
                                        <CandidateApply appData={appData} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
