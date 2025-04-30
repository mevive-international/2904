import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
// import Slider from "./Slider";
import Categories from "./Categories";
import "./styles/Category.css";
import MetaTags from "../../utils/MetaTags";
import CategoryInfo from "./CategoryInfo";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});

    useEffect(() => {
        axios
            .get(constants.API_BASE_URL + "category")
            .then(function (response) {
                setAppData(response.data);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            })
            .then(() => {
                window.scrollTo(0, 0);
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
                />
                <Breadcrumb />
                <CategoryInfo />
                {/* <Slider appData={appData} /> */}
                <Categories appData={appData} />
            </Layout>
        </>
    );
}
