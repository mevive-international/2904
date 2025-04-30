import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
import FaqList from "./FaqList";
import MetaTags from "../../utils/MetaTags";
import LoadingScreen from "../../utils/LoadingScreen";
import { stripTags } from "../../utils/Functions";

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});
    const [seoData, setSeoData] = useState([]);

    useEffect(() => {
        setSeoData([]);
        axios
            .get(constants.API_BASE_URL + "faq")
            .then(function (response) {
                setAppData(response.data);
                let temp = [];
                response.data.faq.forEach((value, i) => {
                    let test = {
                        "@type": "Question",
                        name: `${value.faq_question}`,
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: `${stripTags(value.faq_answer)}`
                        }
                    };
                    temp.push(test);
                });
                let new_schema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: temp,
                };
                setSeoData(new_schema);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Layout>
                <LoadingScreen status={loading} />
                <MetaTags
                    title={appData && appData.seo && appData.seo.seo_meta_title}
                    description={
                        appData &&
                        appData.seo &&
                        appData.seo.seo_meta_description
                    }
                    keywords={
                        appData && appData.seo && appData.seo.seo_meta_keyword
                    }
                    image={appData && appData.seo && appData.seo.seo_meta_image}
                    schema={seoData}
                />
                <Breadcrumb />
                <FaqList appData={appData} />
            </Layout>
        </>
    );
}
