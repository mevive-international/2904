import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import MetaTags from "../utils/MetaTags";

export default function NotFound() {
    return (
        <>
            <Layout>
                <MetaTags
                    title={"404 Not Found"}
                    description={
                        "Sorry! We couldn't find the page you're looking for. please check the URL and try again or try the site search box."
                    }
                />
                <section className="page-title about-img">
                    <div className="auto-container">
                        <h1>Page Not Found</h1>
                    </div>
                </section>
                <div className="container text-center pb-5 pt-0 mt-0">
                    <img
                        src="/images/404.gif"
                        width="40%"
                        className="img-fluid"
                        alt="404 Not Found"
                    />
                    <div className="h3">
                        Sorry! We couldn't find the page you're looking for.
                    </div>
                    <div className="h5 pb-4 pt-2">
                        please check the URL and try again or try the site
                        search box
                    </div>
                    <Link to="/" className="btn btn-secondary">
                        Back to Home
                    </Link>
                </div>
            </Layout>
        </>
    );
}
