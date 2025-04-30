import React from "react";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";
import ShareThis from "../../utils/ShareThis";

export default function Article({ appData }) {
    return (
        <>
            {appData && appData.blog && (
                <article className="article blog-article">
                    <div className="head-block">
                        <h1 className="text-black">{appData.blog[0].blog_title}</h1>
                        <div className="article-title">
                            <div className="media">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="media-body">
                                            <label>Mevive International</label>
                                            <span>
                                                {appData.blog[0].blog_date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="pro-share-block">
                                            <ShareThis />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article-img">
                        <img
                            width="100%"
                            src={`${constants.APP_BASE_URL}${appData.blog[0].blog_image}`}
                            title=""
                            alt={appData.blog[0].blog_image_alt}
                        />
                    </div>
                    <div className="article-content">
                        <PrintHtml html={appData.blog[0].blog_description} />
                    </div>
                </article>
            )}
        </>
    );
}
