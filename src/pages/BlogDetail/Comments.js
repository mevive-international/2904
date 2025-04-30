import React from "react";
import PrintHtml from "../../utils/PrintHtml";

export default function Comments({ appData }) {
    return (
        <>
            {appData && appData.comments && appData.comments.length > 0 && (
                <div className="col-lg-12 m-15px-tb blog-aside">
                    <div className="widget widget-author">
                        <div className="widget-title">
                            <h3>Comments</h3>
                        </div>
                        {appData.comments.map((value, i) => (
                            <React.Fragment key={i}>
                                <div className="widget-body">
                                    <div className="media align-items-center">
                                        <div className="avatar">
                                            <img
                                                width="100%"
                                                src="/images/avatar6.webp"
                                                title=""
                                                alt={value.username}
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h6>
                                                Comments By <br />{" "}
                                                {value.username}
                                            </h6>
                                        </div>
                                    </div>
                                    <PrintHtml html={value.comments} />
                                </div>
                                <hr />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
