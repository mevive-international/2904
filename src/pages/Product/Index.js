import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
import CategoryInfo from "./CategoryInfo";
import ManufacturingProcess from "./ManufacturingProcess";
import OfferingProducts from "./OfferingProducts";
import OtherProducts from "./OtherProducts";
import ApplicationPage from "./ApplicationPage";
import "./styles/Product.css";
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
            .post(constants.API_BASE_URL + "product", {
                category_slug: slug,
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
                window.scrollTo(0, 0);
                setLoading(false);
            });
    }, [slug]);

    return (
        <>
            {isError && <NotFound />}
            {!isError && (
                <Layout>
                    <LoadingScreen status={loading} />
                    <MetaTags
                        title={
                            appData && appData.category
                                ? appData.category.ca_meta_title
                                : ""
                        }
                        description={
                            appData && appData.category
                                ? appData.category.ca_meta_description
                                : ""
                        }
                        image={
                            appData && appData.category
                                ? appData.category.ca_image
                                : ""
                        }
                    />
                    <Breadcrumb />
                    <CategoryInfo appData={appData} />
                    <OfferingProducts appData={appData} slug={slug} />
                    {appData && appData.category && (
                        <OtherProducts appData={appData} />
                    )}
                    <ApplicationPage appData={appData} />
                    <ManufacturingProcess appData={appData} />
                </Layout>
            )}
        </>
    );
}
