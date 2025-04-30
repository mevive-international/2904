import React from "react";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";
import { Link, useNavigate } from "react-router-dom";

export default function RelatedBlogs({ appData }) {
    const navigate = useNavigate();

    return (
        <>
            {appData && appData.related_blog && (
                <section className="products-sec related_blogs">
                    <div className="container">
                        <div style={{ paddingTop: "30px" }} className="row">
                            <div className="col-md-12">
                                <div
                                    style={{ marginBottom: "40px" }}
                                    className="head-block text-center aos-init"
                                    data-aos="fade-In"
                                    data-aos-offset="300"
                                >
                                    <h2 className="text-black">
                                        Related{" "}
                                        <span className="color-orange">Blogs</span>
                                    </h2>
                                </div>
                            </div>
                            {appData.related_blog.map((value, i) => (
                                <div className="col-md-4" key={i}>
                                    <div
                                        className="blog-block"
                                        onClick={() =>
                                            navigate(`/blog/${value.blog_slug}`)
                                        }
                                    >
                                        <div className="blog-img">
                                            <img
                                                src={`${constants.APP_BASE_URL}${value.blog_image}`}
                                                className="img-fluid"
                                                alt={value.blog_image_alt}
                                            />
                                        </div>
                                        <div className="blog-cont">
                                            <h3>{value.blog_title}</h3>
                                            <PrintHtml
                                                html={value.blog_description}
                                            />
                                            <Link
                                                to={`/blog/${value.blog_slug}`}
                                                className="btn-primary"
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
