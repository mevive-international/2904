import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";

export default function RelatedBlogs({ appData }) {
    return (
        <>
            {appData.relate_blogs && appData.relate_blogs.length > 0 && (
                <div className="row product-related-blogs">
                    <div className="col-md-12">
                        <div className="head-block">
                            <h2
                                style={{
                                    textAlign: "center",
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                }}
                                className="text-black"
                            >
                                Related{" "}
                                <span className="color-orange">Articles </span>{" "}
                            </h2>
                        </div>
                    </div>
                    {appData.relate_blogs.map((value, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="blog-block">
                                    <div className="blog-img">
                                        <Link to={`/blog/${value.blog_slug}`}>
                                            <img
                                                src={
                                                    constants.STORAGE_BASE_URL +
                                                    value.blog_image
                                                }
                                                className="img-fluid"
                                                alt={value.blog_image_alt}
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog-cont">
                                        <h3>
                                            <Link
                                                to={`/blog/${value.blog_slug}`}
                                            >
                                                {value.blog_title}
                                            </Link>
                                        </h3>
                                        <Link to={`/blog/${value.blog_slug}`}>
                                            <PrintHtml
                                                html={`${value.blog_description}...`}
                                            />
                                        </Link>
                                        <Link
                                            to={`/blog/${value.blog_slug}`}
                                            className="btn btn-primary"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
