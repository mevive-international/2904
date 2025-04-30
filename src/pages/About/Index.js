import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import "./styles/About.css";
import Breadcrumb from "./Breadcrumb";
import AboutSection from "./AboutSection";
import AdvantageSection from "./AdvantageSection";
import MilestoneSection from "./MilestoneSection";
import CounterSection from "./CounterSection";
import GoalSection from "./GoalSection";
import CertificateSection from "./CertificateSection";
import WhyChooseSection from "./WhyChooseSection";
import CustomerSection from "../Home/CustomerSection";
import TestimonialSection from "./TestimonialSection";
import MetaTags from "../../utils/MetaTags";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});

    useEffect(() => {
        axios
            .get(constants.API_BASE_URL + "about")
            .then(function (response) {
                setAppData(response.data);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    const seo_schema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Mevive International Food Ingredients",
            alternateName: "Mevive",
            url: "https://www.meviveinternational.com/",
            logo: "https://www.meviveinternational.com/images/logo-dark.webp",
            sameAs: [
                "https://www.facebook.com/meviveinternational/",
                "https://twitter.com/MeviveIntl",
                "https://www.instagram.com/meviveinternational/",
                "https://www.youtube.com/channel/UCG-bfLZuJFkomwqNMNvMnSg",
                "https://www.linkedin.com/company/mevive-international/",
                "https://in.pinterest.com/meviveinternational/",
                "https://www.meviveinternational.com/",
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Mevive International Food Ingredients",
            image: "https://www.google.com/maps/place/Mevive+International+Food+Ingredients/@11.0130094,76.9994654,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipODgqVdXOeU8TXy41QPHa3b1GYU1s7mXF94npNO!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipODgqVdXOeU8TXy41QPHa3b1GYU1s7mXF94npNO%3Dw203-h270-k-no!7i3472!8i4624!4m5!3m4!1s0x3ba859d29cd38cfd:0x29ad4648d2296416!8m2!3d11.0130195!4d76.9994358",
            "@id": "",
            url: "https://www.meviveinternational.com",
            telephone: "+91 7540073991",
            address: {
                "@type": "PostalAddress",
                streetAddress:
                    "M3, Mayflower Metropolis, Udayampalayam Road, Sowripalayam,",
                addressLocality: "Coimbatore",
                postalCode: "641028",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 11.013086962676427,
                longitude: 76.99943253510565,
            },
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                opens: "09:00",
                closes: "18:00",
            },
            sameAs: [
                "https://www.facebook.com/meviveinternational/",
                "https://twitter.com/MeviveIntl",
                "https://www.instagram.com/meviveinternational/",
                "https://www.youtube.com/channel/UCG-bfLZuJFkomwqNMNvMnSg",
                "https://www.linkedin.com/company/mevive-international/",
                "https://in.pinterest.com/meviveinternational/",
                "https://www.meviveinternational.com/",
            ],
        },
    ];

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
                    schema={seo_schema}
                />
                <Breadcrumb />
                <AboutSection appData={appData} />
                <AdvantageSection />
                <MilestoneSection appData={appData} />
                <CounterSection appData={appData} />
                <GoalSection appData={appData} />
                <CertificateSection />
                <WhyChooseSection />
                <CustomerSection appData={appData} />
                <TestimonialSection appData={appData} />
            </Layout>
        </>
    );
}
