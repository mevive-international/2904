import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import AboutSection from "./AboutSection";
import ApplicationSection from "./ApplicationSection";
import CategorySection from "./CategorySection";
import HeroSlider from "./HeroSlider";
import CertificationSection from "./CertificationSection";
import CustomerSection from "./CustomerSection";
import HotProductSection from "./HotProductSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import MetaTags from "../../utils/MetaTags";
import LoadingScreen from "../../utils/LoadingScreen";
import { isBrowser, isMobile } from "react-device-detect";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";
import EventSection from "./EventSection";

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});

    useEffect(() => {
        axios
            .get(constants.API_BASE_URL + "home")
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
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "mevive international food ingredients",
            url: "https://www.meviveinternational.com/",
            potentialAction: {
                "@type": "SearchAction",
                target: "https://www.meviveinternational.com/search/{search_term_string}",
                "query-input": "required name=search_term_string",
            },
        },
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
                    name: "Dehydrated Vegetables",
                    item: "https://www.meviveinternational.com/products/dehydrated-vegetables",
                },
                {
                    "@type": "ListItem",
                    position: 4,
                    name: "Dehydrated Garlic",
                    item: "https://www.meviveinternational.com/product/dehydrated-vegetables/dehydrated-garlic",
                },
            ],
        },
    ];

    return (
        <>
            <Layout loading={loading}>
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
                <HeroSlider />
                {/* {isBrowser && <DesktopSlider />} */}
                {/* {isMobile && <MobileSlider />} */}
                <AboutSection />
                <CategorySection appData={appData} />
                <ApplicationSection appData={appData} />
                <CertificationSection />
                <CustomerSection appData={appData} />
                <HotProductSection appData={appData} />
                <BlogSection appData={appData} />
                <EventSection />
                <ContactSection />
            </Layout>
        </>
    );
}
