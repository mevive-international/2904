import React from "react";
import PrintHtml from "../../utils/PrintHtml";

export default function JobDetail({ appData }) {
    return (
        <>
            {appData && appData.career_details && (
                <div className="single-candidate-bottom-left">
                    <div className="single-candidate-widget">
                        <h3>{appData.career_details[0].car_title}</h3>

                        <ul className="company-desc-list">
                            <li>
                                <i className="fa fa-check"></i> Designation:{" "}
                                {appData.career_details[0].car_designation}{" "}
                            </li>
                            <li>
                                <i className="fa fa-check"></i> Employment Type:{" "}
                                {appData.career_details[0].car_emptype}
                            </li>
                            <li>
                                <i className="fa fa-check"></i> Experience:{" "}
                                {appData.career_details[0].car_experience}{" "}
                            </li>
                            <li>
                                <i className="fa fa-check"></i> Qualification:{" "}
                                {appData.career_details[0].car_qualification}{" "}
                            </li>
                        </ul>
                        <h3>Skills</h3>
                        <PrintHtml html={appData.career_details[0].car_skill} />

                        <h3>Job Role &amp; Responsibilities</h3>
                        <div className="job-desc-block">
                            <PrintHtml
                                html={appData.career_details[0].car_role_res}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
