import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import constants from "../../config.json";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Breadcrumb from "./Breadcrumb";
import BlogPosts from "./BlogPosts";
import MetaTags from "../../utils/MetaTags";
import LoadingScreen from "../../utils/LoadingScreen";

export default function Index() {
    const { slug } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState({});
    const itemsPerPage = 12;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [pageNo, setPageNo] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        setLoading(true);
        axios
            .post(constants.API_BASE_URL + "blogfull", {
                product_id: slug,
            })
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
    }, [slug]);

    useEffect(() => {
        if (appData.blog) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(appData.blog.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(appData.blog.length / itemsPerPage));
            window.scrollTo(0, 0);
        }
    }, [itemOffset, itemsPerPage, appData]);

    useEffect(() => {
        if (appData.blog) {
            const page = searchParams.get("page");
            if(page) {
                const newOffset = ((page - 1) * itemsPerPage) % appData.blog.length;
                const endOffset = newOffset + itemsPerPage;
                setPageNo(page - 1);
                setCurrentItems(appData.blog.slice(newOffset, endOffset));
            }
        }
    }, [appData, searchParams]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % appData.blog.length;
        setItemOffset(newOffset);
        setSearchParams({page: event?.selected + 1}) 
    };

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
                <BlogPosts currentItems={currentItems} />
                <div className="text-center">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">>"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        forcePage={pageNo}
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
