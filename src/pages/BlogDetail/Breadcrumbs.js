import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ appData }) {
    return (
        <>
            {appData && appData.blog && (
                <div className="breadcrumbs-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Food Ingredients Blog</Link>
                        </li>
                        <li>
                            <Link to={`/blog/${appData.blog[0].blog_slug}`}>
                                Blog Details
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}
