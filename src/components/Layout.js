import React, { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import constants from "../config.json";
import axios from "axios";

export default function Layout({ children, isDarkHeader = false, loading = false }) {
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
            });
    }, []);

    return (
        <>
            <Header appData={appData} isDarkHeader={isDarkHeader} loading={loading} />
            {children}
            <Footer appData={appData} />
        </>
    );
}
