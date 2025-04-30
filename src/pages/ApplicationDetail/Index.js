import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
import ApplicationDetail from "./ApplicationDetail";
import OfferProducts from "./OfferProducts";
import "./styles/ApplicationDetail.css";
import MetaTags from "../../utils/MetaTags";
import NotFound from "../NotFound";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [appData, setAppData] = useState({});

    useEffect(() => {
        setLoading(true);
        setAppData({});
        axios
            .post(constants.API_BASE_URL + "applicationdetails", {
                application_slug: slug,
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

    const seo_schema = [
        // {
        //     "@context": "https://schema.org/",
        //     "@type": "Product",
        //     name: `${
        //         appData &&
        //         appData.application_details &&
        //         appData.application_details[0].app_meta_title
        //     }`,
        //     image: `${constants.APP_BASE_URL}${
        //         appData &&
        //         appData.application_details &&
        //         appData.application_details[0].app_de_image
        //     }`,
        //     description: `${
        //         appData &&
        //         appData.application_details &&
        //         appData.application_details[0].app_meta_description
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
                    name: "Applications",
                    item: "https://www.meviveinternational.com/applications",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${
                        appData && appData.application_details
                            ? appData.application_details[0].app_title
                            : ""
                    }`,
                    item: `https://www.meviveinternational.com/applications/${
                        appData && appData.application_details
                            ? appData.application_details[0].app_slug
                            : ""
                    }`,
                }
            ],
        },
    ];

    return (
        <>
            {isError && <NotFound />}
            {!isError && (
                <Layout>
                    <LoadingScreen status={loading} />
                    <MetaTags
                        title={
                            appData && appData.application_details
                                ? appData.application_details[0].app_meta_title
                                : ""
                        }
                        description={
                            appData && appData.application_details
                                ? appData.application_details[0]
                                      .app_meta_description
                                : ""
                        }
                        keywords={
                            appData && appData.application_details
                                ? appData.application_details[0]
                                      .app_meta_keyword
                                : ""
                        }
                        image={
                            appData && appData.application_details
                                ? appData.application_details[0].app_de_image
                                : ""
                        }
                        schema={seo_schema}
                    />
                    <Breadcrumb appData={appData} />
                    <ApplicationDetail appData={appData} />
                    <OfferProducts appData={appData} />
                </Layout>
            )}
        </>
    );
}
