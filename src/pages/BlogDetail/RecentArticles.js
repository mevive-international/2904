import React, { useEffect, useState } from "react";
import constants from "../../config.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function RecentArticles() {
    const navigate = useNavigate();
    const [appData, setAppData] = useState({});

    useEffect(() => {
        setAppData({});
        axios
            .get(constants.API_BASE_URL + "recentblog")
            .then(function (response) {
                setAppData(response.data);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            });
    }, []);

    return (
        <>
            {appData && appData.blog && (
                <div className="widget widget-latest-post">
                    <div className="widget-title">
                        <h4>
                            Recent <span> Blogs</span>
                        </h4>
                    </div>
                    <div className="widget-body">
                        {appData.blog.map((value, i) => (
                            <div
                                className="blog-card__content"
                                key={i}
                                onClick={() => navigate(`/blog/${value.blog_slug}`)}
                            >
                                <h3 className="blog-card__content-title">
                                    <Link to={`/blog/${value.blog_slug}`}>
                                        {value.blog_title}
                                    </Link>
                                </h3>

                                <div className="blog-card__meta">
                                    <Link
                                        to={`/blog/${value.blog_slug}`}
                                        className="blog-card__read-time"
                                    >
                                        {value.blog_date}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
