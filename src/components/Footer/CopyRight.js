import React from "react";

export default function CopyRight() {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <>
            <section className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="rights-content">
                                <p>
                                    Copyright © {getYear()}. Mevive International. All
                                    Rights Reserved.
                                </p>
                                <span>Developed by <a style={{"color": "#e91e63"}} href="https://www.cloustech.com/" target="_blank" rel="noreferrer">ClousTech</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
