import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";
import "./styles/BlogSection.css";

export default function BlogSection({ appData }) {
    return (
        <>
            <section style={{ paddingTop: "40px" }} className="blog-section home-blog">
                <div className="container">
                    <div className="col-md-12">
                        <div
                            style={{ marginBottom: "40px" }}
                            className="head-block text-center"
                        >
                            <h2 className="text-black">
                                Latest{" "}
                                <span className="color-orange">Blogs</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        {appData.blogs &&
                            appData.blogs.map((value, i) => {
                                return (
                                    <div className="col-md-4 equal" key={i}>
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
                                                    <PrintHtml html={value.blog_description} />...
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
                </div>
            </section>
        </>
    );
}
