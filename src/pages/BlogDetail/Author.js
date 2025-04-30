import React from "react";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";

export default function Author({ appData }) {
    return (
        <>
            {appData && appData.blog && (
                <div className="col-lg-12 m-15px-tb blog-aside">
                    <div className="widget widget-author">
                        <div className="widget-title">
                            <h3>Author</h3>
                        </div>
                        <div className="widget-body">
                            <div className="media align-items-center">
                                <div className="avatar">
                                    <img
                                        width="100%"
                                        src={`${constants.APP_BASE_URL}${appData.blog[0].blog_author_img}`}
                                        title=""
                                        alt={appData.blog[0].blog_author}
                                    />
                                </div>
                                <div className="media-body">
                                    <h6>
                                        Article By <br />{" "}
                                        {appData.blog[0].blog_author}
                                    </h6>
                                </div>
                            </div>
                            <PrintHtml
                                html={appData.blog[0].blog_author_descrip}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
