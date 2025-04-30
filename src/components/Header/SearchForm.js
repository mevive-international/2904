import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import constants from "../../config.json";

export default function SearchForm() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [key, setKey] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [searchListLength, setSearchListLength] = useState(0);
    const wrapperRef = useRef(null);

    /**
     * Hook that alerts clicks outside of the passed ref
     */
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(false);
                    setKey("");
                    setSearchList([]);
                    setSearchListLength(0);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(wrapperRef);

    const styleList = { top: "35px", left: "0px", display: "none" };
    const styleShowList = { top: "35px", left: "0px", display: "block" };
    const styleReadMore = { color: "#ffa711" };

    const searchFunction = (e) => {
        let skey = e.target.value;
        axios
            .post(constants.API_BASE_URL + "autosearch", { skey })
            .then(function (response) {
                const slicedArray = response.data.result.slice(0, 10);
                setSearchList(slicedArray);
                setSearchListLength(response.data.result.length);
                setKey(skey);
            })
            .catch(function (error) {
                toast.error(error.message);
                console.log(error);
            });
    };

    const stripTitle = (title) => {
        if (title.length > 30) {
            title = title.substring(0, 30) + " ...";
        }
        return title;
    };

    const showSearch = () => {
        if (show) {
            setKey("");
            setSearchList([]);
            setSearchListLength(0);
        }
        setShow(!show);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            navigate(`/search/${key}`);
        }
    };
    return (
        <div className="search-form" ref={wrapperRef}>
            <div className={show ? "search active" : "search"} id="search0">
                <input
                    type="text"
                    placeholder="Search..."
                    id="search_id"
                    name="s"
                    onKeyPress={handleKeyPress}
                    onKeyUp={searchFunction}
                />
                <div className="icon">
                    <i className="fa fa-search" onClick={showSearch}></i>
                </div>
                <div className="close-icon">
                    <i className="fa fa-close" onClick={showSearch}></i>
                </div>
            </div>
            <ul
                id="search_list"
                className="dropdown-menu search-header"
                style={key ? styleShowList : styleList}
            >
                {searchList &&
                    searchList.map((value, i) => {
                        return (
                            <li className="media" key={i}>
                                <Link to={value.href}>
                                    {stripTitle(value.title)}
                                </Link>
                            </li>
                        );
                    })}
                {searchListLength >= 10 && (
                    <li className="media">
                        <Link style={styleReadMore} to={`/search/${key}`}>
                            Read More
                        </Link>
                    </li>
                )}
                {key !== "" && !searchListLength && (
                    <li className="media">
                        <div>No Records Found</div>
                    </li>
                )}
            </ul>
        </div>
    );
}
