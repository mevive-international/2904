import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import BlogLayout from "./BlogLayout";
import "./styles/BlogDetail.css";
import RelatedBlogs from "./RelatedBlogs";
import ProgressBar from "./ProgressBar";
import MetaTags from "../../utils/MetaTags";
import NotFound from "../NotFound";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [appData, setAppData] = useState({});
    const [appVideoData, setAppVideoData] = useState({});
    const [seoVideoData, setSeoVideoData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setAppData({});
        axios
            .post(constants.API_BASE_URL + "blog_details", {
                blog_slug: slug,
            })
            .then(function (response) {
                setIsError(false);
                setAppData(response.data);
            })
            .catch(function (error) {
                setAppData({});
                setIsError(true);
                console.log(error);
            })
            .then(() => {
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        setAppVideoData({});
        setSeoVideoData([]);
        axios
            .get(constants.API_BASE_URL + "latestpost")
            .then(function (response) {
                setAppVideoData(response.data);
                let temp = [];
                response.data.latestpost.forEach((value, i) => {
                    let test = {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        name: `${value.latpost_title}`,
                        description: `${value.latpost_description}`,
                        thumbnailUrl: `${constants.APP_BASE_URL}${value.latpost_image}`,
                        uploadDate: `${value.latpost_upload_date}`,
                        duration: `${value.latpost_duration}`,
                        contentUrl: `${value.latpost_url}`,
                    };
                    temp.push(test);
                });
                setSeoVideoData(temp);
            })
            .catch(function (error) {
                setAppVideoData({});
                console.log(error);
            });
    }, []);

    const seo_schema = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${window.location.href}`,
            },
            headline: `${
                appData && appData.blog && appData.blog[0].blog_meta_title
            }`,
            description: `${
                appData && appData.blog && appData.blog[0].blog_meta_description
            }`,
            image: `${constants.APP_BASE_URL}${
                appData && appData.blog && appData.blog[0].blog_image
            }`,
            author: {
                "@type": "Person",
                name: `${
                    appData && appData.blog && appData.blog[0].blog_author
                }`,
                // url: "https://www.linkedin.com/in/siva-raman-mevive",
            },
            publisher: {
                "@type": "Organization",
                name: "Mevive International",
                logo: {
                    "@type": "ImageObject",
                    url: "https://www.meviveinternational.com/images/logo-dark.webp",
                },
            },
            datePublished: `${
                appData && appData.blog && appData.blog[0].blog_date
            }`,
        },
        {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.meviveinternational.com/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: "https://www.meviveinternational.com/blog",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${
                        appData && appData.blog
                            ? appData.blog[0].blog_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/blog/${
                        appData && appData.blog ? appData.blog[0].blog_slug : ""
                    }`,
                },
            ],
        },
    ];

    return (
        <>
            {isError && <NotFound />}
            {!isError && (
                <Layout isDarkHeader={true}>
                    <LoadingScreen status={loading} />
                    <MetaTags
                        title={
                            appData &&
                            appData.blog &&
                            appData.blog[0].blog_meta_title
                        }
                        description={
                            appData &&
                            appData.blog &&
                            appData.blog[0].blog_meta_description
                        }
                        keywords={
                            appData &&
                            appData.blog &&
                            appData.blog[0].blog_meta_keyword
                        }
                        image={
                            appData &&
                            appData.blog &&
                            appData.blog[0].blog_image
                        }
                        schema={[...seo_schema, ...seoVideoData]}
                    />
                    <ProgressBar />
                    <BlogLayout appData={appData} appVideoData={appVideoData} />
                    <RelatedBlogs appData={appData} />
                </Layout>
            )}
        </>
    );
}
