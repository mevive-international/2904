import React from "react";
import { Link } from "react-router-dom";
import constants from "../../config.json";
import PrintHtml from "../../utils/PrintHtml";
import { useNavigate } from "react-router-dom";

export default function BlogPosts({ currentItems }) {
    const navigate = useNavigate();

    const stripTitle = (title) => {
        if (title.length > 50) {
            title = title.substring(0, 50) + " ...";
        }
        return title;
    };

    const openBlogLink = (event, id) => {
        let url = `/blog/${id}`;
        if (event.ctrlKey || event.button === 1) {
            event.preventDefault();
            window.open(url, "_blank");
        } else if (event.type === "click") {
            navigate(url);
        }
    };

    const openBlogLinkNewWindow = (id) => {
        let url = `/blog/${id}`;
        window.open(url, "_blank");
    };

    return (
        <>
            <section className="products-sec blog">
                <div className="container">
                    <div className="row">
                        {currentItems &&
                            currentItems.map((value, i) => (
                                <div className="col-md-3" key={i}>
                                    <div
                                        className="blog-block"
                                        onMouseDown={(event) =>
                                            event.button === 1
                                                ? openBlogLinkNewWindow(
                                                      value.blog_slug
                                                  )
                                                : ""
                                        }
                                        onClick={(event) =>
                                            openBlogLink(event, value.blog_slug)
                                        }
                                    >
                                        <div className="blog-img">
                                            <img
                                                style={{ width: "100%" }}
                                                src={`${constants.APP_BASE_URL}${value.blog_image}`}
                                                className="img-fluid"
                                                alt={value.blog_image_alt}
                                            />
                                        </div>
                                        <div className="blog-cont">
                                            <h3 title={value.blog_title}>
                                                {stripTitle(value.blog_title)}
                                                <span>
                                                    <i className="fa fa-clock-o"></i>{" "}
                                                    {value.blog_date}
                                                </span>
                                            </h3>
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
        </>
    );
}
