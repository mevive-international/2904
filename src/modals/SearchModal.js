import React, { useState } from "react";
import axios from "axios";
import constants from "../config.json";
import { toast } from "react-toastify";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

export default function SearchModal({ isOpen, toggle }) {
    const [key, setKey] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [searchListLength, setSearchListLength] = useState(0);

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

    return (
        <>
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                className="modal-box exampleModalLong searchhh"
            >
                <ModalHeader>
                    <div className="h6" id="exampleModalCenterTitle">
                        Search For Products, Applications and Blogs
                    </div>
                    <button type="button" className="close" onClick={toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className="input-group mb-md-3 mb-0">
                        {" "}
                        <input
                            type="text"
                            id="searchkey"
                            name="s"
                            className="form-control input-text"
                            placeholder="Start typing the products, applications, blogs you are looking for...."
                            onKeyUp={searchFunction}
                        />
                        <div className="input-group-append">
                            <Link
                                to={key.length > 0 ? `/search/${key}` : "#"}
                                onClick={toggle}
                                id="search_submit"
                                className="btn btn-outline-warning btn-lg"
                                style={{ height: "40px" }}
                            >
                                <i className="fa fa-search"></i>
                            </Link>
                        </div>
                    </div>

                    <ul
                        id="searchkey_list"
                        className="dropdown-menu search-header"
                        style={key ? styleShowList : styleList}
                    >
                        {searchList &&
                            searchList.map((value, i) => {
                                return (
                                    <>
                                        <li className="media" key={i}>
                                            <Link to={value.href}>
                                                {stripTitle(value.title)}
                                            </Link>
                                        </li>
                                    </>
                                );
                            })}
                        {searchListLength >= 10 && (
                            <li className="media">
                                <Link
                                    style={styleReadMore}
                                    to={`/search/${key}`}
                                >
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
                </ModalBody>
                <ModalFooter>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={toggle}
                    >
                        Close
                    </button>
                </ModalFooter>
            </Modal>
        </>
    );
}
