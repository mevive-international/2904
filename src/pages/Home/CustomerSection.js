import React, { useState } from "react";
import constants from "../../config.json";

export default function CustomerSection({ appData }) {
    const [isActive, setActive] = useState(false);
    const ShowButton = () => {
        setActive(!isActive);
        if (isActive) {
            document.querySelector("#HomeCustomerSection").scrollIntoView({
                behavior: "auto",
            });
        }
    };
    return (
        <>
            <section className="customer-sec" id="HomeCustomerSection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="head-block text-center">
                                <h2 className="text-black">
                                    Key{" "}
                                    <span className="color-orange">
                                        Customers
                                    </span>
                                </h2>
                            </div>
                            <div className="customer-img">
                                <ul
                                    className={
                                        isActive
                                            ? "text"
                                            : "text show-more-height"
                                    }
                                >
                                    {appData.client &&
                                        appData.client.map((value, i) => {
                                            return (
                                                <li key={i}>
                                                    <img
                                                        src={
                                                            constants.STORAGE_BASE_URL +
                                                            value.ci_image
                                                        }
                                                        alt={value.ci_title}
                                                    />
                                                </li>
                                            );
                                        })}
                                </ul>

                                <button
                                    onClick={() => ShowButton()}
                                    onMouseDown={(event) =>
                                        event.button === 1 ? ShowButton() : ""
                                    }
                                    className="btn btn-primary show-more"
                                >
                                    View {isActive ? "Less" : "More"}
                                    <i className="fa fa-down-arrow"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
