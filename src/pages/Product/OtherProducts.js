import React, { useEffect, useState } from "react";
import constants from "../../config.json";
import axios from "axios";

const CategoryId = {
    1: 8,
    2: 6,
    3: 5,
    4: 7,
};

export default function OtherProducts({ appData }) {
    const [appSubData, setAppSubData] = useState([]);

    useEffect(() => {
        if (CategoryId[appData.category.id]) {
            axios
                .post(constants.API_BASE_URL + "other_product", {
                    category_id: CategoryId[appData.category.id],
                })
                .then(function (response) {
                    setAppSubData(response.data);
                })
                .catch(function (error) {
                    setAppSubData([]);
                    console.log(error);
                });
        } else {
            setAppSubData([]);
        }
    }, [appData]);

    return (
        <>
            <section className="tlp-more-topics" id="other-de">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="head-block text-center aos-init"
                                data-aos="fade-In"
                                data-aos-offset="300"
                            >
                                <h2 className="text-black">
                                    Other{" "}
                                    <span className="color-orange">
                                        {appData.category.ca_title} Products
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="row tlp-more-topics__row">
                            {appSubData.product &&
                                appSubData.product.map((value, i) => (
                                    <div className="col-md-4" key={i}>
                                        <div className="tlp-more-topics__row-item color-scheme-1">
                                            {value.prdt_title}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
