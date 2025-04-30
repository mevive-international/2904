import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./styles/Search.css";
import BreadCrumb from "./BreadCrumb";
import Results from "./Results";
import MetaTags from "../../utils/MetaTags";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});
    const [totalRecords, setTotalRecords] = useState(0);
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setLoading(true);
        setAppData({});
        axios
            .post(constants.API_BASE_URL + "search", {
                s: JSON.stringify(slug),
            })
            .then(function (response) {
                setAppData(response.data);
                setTotalRecords(response.data.products.length);
            })
            .catch(function (error) {
                setAppData({});
                console.log(error);
            })
            .then(() => {
                setLoading(false);
            });
    }, [slug]);

    useEffect(() => {
        if (appData.products) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(appData.products.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(appData.products.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, appData]);

    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % appData.products.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Layout isDarkHeader={true}>
                <LoadingScreen status={loading} />
                <MetaTags title={"Search | Mevive International"} description={""} />
                <BreadCrumb slug={slug} total_records={totalRecords} />
                <Results currentItems={currentItems} />
                <div className="text-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">>"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<<"
                        renderOnZeroPageCount={null}
                        className="pagination"
                        nextClassName="page-item"
                        previousClassName="page-item"
                        pageClassName="page-item"
                        nextLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        pageLinkClassName="page-link"
                        activeClassName="active"
                    />
                </div>
            </Layout>
        </>
    );
}
