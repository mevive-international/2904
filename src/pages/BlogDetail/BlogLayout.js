import React from "react";
import Article from "./Article";
import Author from "./Author";
import Breadcrumbs from "./Breadcrumbs";
import Comments from "./Comments";
import GetAQuote from "./GetAQuote";
import LatestPosts from "./LatestPosts";
import NewsLetter from "./NewsLetter";
import PostComment from "./PostComment";
import RecentArticles from "./RecentArticles";

export default function BlogLayout({ appData, appVideoData }) {
    return (
        <>
            <section>
                <div className="blog-single gray-bg">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-lg-8 m-15px-tb">
                                <Breadcrumbs appData={appData} />
                                <Article appData={appData} />
                                <Author appData={appData} />
                                <Comments appData={appData} />
                                <PostComment appData={appData} />
                            </div>
                            <div className="col-lg-4 m-15px-tb">
                                <aside>
                                    <RecentArticles />
                                    <NewsLetter />
                                    <LatestPosts appData={appVideoData}/>
                                    <GetAQuote />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
