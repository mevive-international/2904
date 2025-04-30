import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import constants from "../config.json";

export default function MetaTags({
    title = "",
    description = "",
    keywords = "",
    image = "",
    schema = [],
}) {
    const location = useLocation();
    const [appData, setAppData] = useState({});
    const [metaTags, setMetaTags] = useState([]);

    useEffect(() => {
        axios
            .get(constants.API_BASE_URL + "seo")
            .then(function (response) {
                setAppData(response.data);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            });
    }, []);

    const generateCanonicalUrl = () => {
        return location.pathname === "/"
            ? `${constants.SITE_BASE_URL}`
            : `${constants.SITE_BASE_URL}${location.pathname}`;
    };

    const getTitle = (title) => {
        return title
            ? title
            : appData && appData.seo
            ? appData.seo.seo_meta_title
            : "Mevive International";
    };

    const getDescription = (description) => {
        return description
            ? description
            : appData && appData.seo
            ? appData.seo.seo_meta_description
            : "Mevive International";
    };

    const getSchema = (seo_schema) => {
        const search_schema = {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Mevive International Food Ingredients",
            url: "https://www.meviveinternational.com/",
            potentialAction: {
                "@type": "SearchAction",
                target: "https://www.meviveinternational.com/search/{search_term_string}",
                "query-input": "required name=search_term_string",
            },
        };
        if (
            seo_schema.length === 0 ||
            (seo_schema.length > 0 &&
                !seo_schema.some((el) => el["@type"] === "WebSite"))
        ) {
            seo_schema.push(search_schema);
        }
        return seo_schema;
    };

    const getImage = (image) => {
        const pattern = /^((http|https):\/\/)/;

        if (image) {
            if (!pattern.test(image)) {
                image = `${constants.APP_BASE_URL}${image}`;
            }
            return image;
        } else {
            return "https://www.meviveinternational.com/images/logo-dark.webp";
        }
    };

    useEffect(() => {
        let html = appData && appData.seo ? appData.seo.seo_g_webmaster : "";
        var el = document.createElement("html");
        el.innerHTML = html;
        const meta = el.getElementsByTagName("meta");
        let meta_array = [];
        for (let i = 0; i < meta.length; i++) {
            meta_array[meta[i].getAttribute("name")] =
                meta[i].getAttribute("content");
        }
        setMetaTags(meta_array);
    }, [appData]);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{getTitle(title)}</title>
                    <link rel="canonical" href={generateCanonicalUrl()} />
                    <meta
                        name="description"
                        content={getDescription(description)}
                    />
                    {keywords && keywords !== "" && (
                        <meta name="keywords" content={keywords} />
                    )}
                    <meta property="og:title" content={getTitle(title)} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta
                        property="og:site_name"
                        content="Mevive International"
                    />
                    <meta
                        property="og:description"
                        content={getDescription(description)}
                    />
                    <meta property="og:url" content={generateCanonicalUrl()} />
                    <meta property="og:image" content={getImage(image)} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@meviveintl" />
                    <meta name="twitter:title" content={getTitle(title)} />
                    <meta
                        name="twitter:description"
                        content={getDescription(description)}
                    />
                    <meta name="twitter:image" content={getImage(image)} />
                    <meta name="twitter:creator" content="@meviveintl" />
                    {metaTags && metaTags["dc.language"] && (
                        <meta
                            name="dc.language"
                            content={metaTags["dc.language"]}
                        />
                    )}
                    {metaTags && metaTags["google-site-verification"] && (
                        <meta
                            name="google-site-verification"
                            content={metaTags["google-site-verification"]}
                        />
                    )}
                    {metaTags && metaTags["robots"] && (
                        <meta name="robots" content={metaTags["robots"]} />
                    )}
                    <script type="application/ld+json">
                        {JSON.stringify(getSchema(schema))}
                    </script>
                </Helmet>
            </HelmetProvider>
        </>
    );
}
