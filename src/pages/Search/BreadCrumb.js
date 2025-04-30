import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BreadCrumb({ slug, total_records }) {
    const navigate = useNavigate();
    const [key, setKey] = useState(slug);

    const setKeyValue = (e) => {
        let skey = e.target.value;
        setKey(skey);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            navigate(`/search/${key}`);
        }
    };

    return (
        <>
            <section className="search-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2> Search results for “{slug}”</h2>
                        </div>
                        <div className="col-md-12">
                            <p className="text-warning">
                                <i className="fa fa-info-circle"></i>{" "}
                                {total_records} Records were found matching your
                                selection.
                            </p>
                            <div className="input-group mb-3">
                                {" "}
                                <input
                                    id="skey"
                                    type="text"
                                    className="form-control input-text"
                                    placeholder="Start typing the products, applications, blogs you are looking for...."
                                    defaultValue={slug}
                                    onKeyPress={handleKeyPress}
                                    onKeyUp={setKeyValue}
                                />
                                <div className="input-group-append">
                                    <Link
                                        to={
                                            key.length > 0
                                                ? `/search/${key}`
                                                : "#"
                                        }
                                        id="search_submit"
                                        className="btn btn-outline-warning btn-lg"
                                        style={{ height: "40px" }}
                                    >
                                        <i className="fa fa-search"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
