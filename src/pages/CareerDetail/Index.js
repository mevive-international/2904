import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./styles/CareerDetail.css";
import Breadcrumb from "./Breadcrumb";
import CareerDetail from "./CareerDetail";
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
            .post(constants.API_BASE_URL + "career_details", {
                career_slug: slug,
            })
            .then(function (response) {
                setIsError(
                    response.data &&
                        response.data.career_details &&
                        response.data.career_details.length > 0
                        ? false
                        : true
                );
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
        {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_meta_title
                    : ""
            }`,
            description: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_meta_description
                    : ""
            }`,
            hiringOrganization: {
                "@type": "Organization",
                name: "Mevive International",
                sameAs: `https://www.meviveinternational.com/careers/${
                    appData && appData.career_details
                        ? appData.career_details[0].car_slug
                        : ""
                }`,
                logo: "https://www.meviveinternational.com/images/logo.webp",
            },
            industry: "Food Ingredient Company",
            employmentType: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_emptype
                    : ""
            }`,
            workHours: "9.30 AM-6.30 PM",
            datePosted: `${
                appData && appData.career_details
                    ? appData.career_details[0].created_at
                    : ""
            }`,
            validThrough: "",
            jobLocation: {
                "@type": "Place",
                address: {
                    "@type": "PostalAddress",
                    streetAddress:
                        "M3, Mayflower Metropolis, Udayampalayam Road, Sowripalayam",
                    addressLocality: "Coimbatore",
                    postalCode: "641028",
                    addressCountry: "IN",
                },
            },
            baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                    "@type": "QuantitativeValue",
                    minValue: 55000,
                    maxValue: 60000,
                    unitText: "MONTH",
                },
            },
            responsibilities: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_role_res
                    : ""
            }`,
            educationRequirements: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_qualification
                    : ""
            }`,
            experienceRequirements: `${
                appData && appData.career_details
                    ? appData.career_details[0].car_experience
                    : ""
            }`,
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
                            appData &&
                            appData.career_details &&
                            appData.career_details[0].car_meta_title
                        }
                        description={
                            appData &&
                            appData.career_details &&
                            appData.career_details[0].car_meta_description
                        }
                        keywords={
                            appData &&
                            appData.career_details &&
                            appData.career_details[0].car_meta_keyword
                        }
                        image={
                            appData &&
                            appData.career_details &&
                            appData.career_details[0].car_meta_image
                        }
                        schema={seo_schema}
                    />
                    <Breadcrumb />
                    <CareerDetail appData={appData} />
                </Layout>
            )}
        </>
    );
}
