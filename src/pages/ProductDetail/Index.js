import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles/ProductDetail.css";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";
import RelatedBlogs from "./RelatedBlogs";
import MetaTags from "../../utils/MetaTags";
import NotFound from "../NotFound";
import LoadingScreen from "../../utils/LoadingScreen";
import { isMobile } from "react-device-detect";

export default function Index() {
    const { slug, product } = useParams();
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [appData, setAppData] = useState({});

    useEffect(() => {
        setLoading(true);
        setAppData({});
        axios
            .post(constants.API_BASE_URL + "productdetails", {
                product_slug: product,
                category_slug: slug,
            })
            .then(function (response) {
                if (response.error) {
                    setAppData({});
                    setIsError(true);
                } else {
                    setIsError(false);
                    setAppData(response.data);
                }
            })
            .catch(function (error) {
                setAppData({});
                setIsError(true);
                console.log(error);
            })
            .then(() => {
                window.scrollTo(0, 0);
                setLoading(false);
            });
    }, [product, slug]);

    const seo_schema = [
        // {
        //     "@context": "https://schema.org/",
        //     "@type": "Product",
        //     name: `${
        //         appData && appData.product && appData.product[0].prdt_meta_title
        //     }`,
        //     image: `${constants.APP_BASE_URL}${
        //         appData && appData.product && appData.product[0].prdt_image
        //     }`,
        //     description: `${
        //         appData &&
        //         appData.product &&
        //         appData.product[0].prdt_meta_description
        //     }`,
        //     brand: {
        //         "@type": "Brand",
        //         name: "Mevive®",
        //     },
        // },
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
                    name: "Products",
                    item: "https://www.meviveinternational.com/products",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${
                        appData && appData.product
                            ? appData.product[0].ca_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/products/${
                        appData && appData.product
                            ? appData.product[0].ca_slug
                            : ""
                    }`,
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: `${
                        appData && appData.product
                            ? appData.product[0].prdt_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/product/${
                        appData && appData.product
                            ? appData.product[0].ca_slug
                            : ""
                    }/${
                        appData && appData.product
                            ? appData.product[0].prdt_slug
                            : ""
                    }`,
                },
            ],
        },
    ];
    const seo_faq_schema = [
        // {
        //     "@context": "https://schema.org/",
        //     "@type": "Product",
        //     name: `${
        //         appData && appData.product && appData.product[0].prdt_meta_title
        //     }`,
        //     image: `${constants.APP_BASE_URL}${
        //         appData && appData.product && appData.product[0].prdt_image
        //     }`,
        //     description: `${
        //         appData &&
        //         appData.product &&
        //         appData.product[0].prdt_meta_description
        //     }`,
        //     brand: {
        //         "@type": "Brand",
        //         name: "Mevive®",
        //     },
        // },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: {
                "@type": "Question",
                name: `${
                    appData &&
                    appData.relat_qus &&
                    appData.relat_qus[0] &&
                    appData.relat_qus[0].requ_question
                }`,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: `${
                        appData &&
                        appData.relat_qus &&
                        appData.relat_qus[0] &&
                        appData.relat_qus[0].requ_answer
                    }`,
                },
            },
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
                    name: "Products",
                    item: "https://www.meviveinternational.com/products",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${
                        appData && appData.product
                            ? appData.product[0].ca_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/products/${
                        appData && appData.product
                            ? appData.product[0].ca_slug
                            : ""
                    }`,
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: `${
                        appData && appData.product
                            ? appData.product[0].prdt_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/product/${
                        appData && appData.product
                            ? appData.product[0].ca_slug
                            : ""
                    }/${
                        appData && appData.product
                            ? appData.product[0].prdt_slug
                            : ""
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
                            appData && appData.product
                                ? appData.product[0].prdt_meta_title
                                : ""
                        }
                        description={
                            appData && appData.product
                                ? appData.product[0].prdt_meta_description
                                : ""
                        }
                        image={
                            appData && appData.product
                                ? appData.product[0].prdt_image
                                : ""
                        }
                        keywords={
                            appData && appData.product
                                ? appData.product[0].prdt_meta_keyword
                                : ""
                        }
                        schema={
                            appData &&
                            appData.relat_qus &&
                            appData.relat_qus[0] &&
                            appData.relat_qus[0].requ_question
                                ? seo_faq_schema
                                : seo_schema
                        }
                    />
                    <section className={isMobile ? "product-page-mobile" : "product-page"}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    {!isMobile && (
                                        <ProductImage appData={appData} />
                                    )}
                                </div>
                                <div className="col-md-7">
                                    <ProductInfo appData={appData} />
                                </div>
                            </div>
                            <ProductDetails appData={appData} />
                            <RelatedProducts appData={appData} />
                            <RelatedBlogs appData={appData} />
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}
