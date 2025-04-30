import React from "react";
import constants from "../../config.json";

export default function LatestPosts({ appData }) {
    return (
        <>
            {appData && appData.latestpost && (
                <div className="widget widget-latest-post mt-5">
                    <div className="widget-title">
                        <h4 className="mb-3">
                            Related <span> Videos</span>
                        </h4>
                    </div>
                    <div className="widget-body">
                        {appData.latestpost.map((value, i) => (
                            <div className="latest-post-aside media" key={i}>
                                <div className="lpa-left media-body">
                                    <div className="lpa-title">
                                        <h5>
                                            <a
                                                href={value.latpost_url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {value.latpost_title}
                                            </a>
                                        </h5>
                                    </div>
                                </div>
                                <div className="lpa-right">
                                    <a
                                        href={value.latpost_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={`${constants.APP_BASE_URL}${value.latpost_image}`}
                                            title=""
                                            alt={value.latpost_title}
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
