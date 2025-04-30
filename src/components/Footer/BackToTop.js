import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BackToTop() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShow(window.scrollY > 300);
        });
        return () => {
            setShow({});
        };
    }, []);

    const goToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            <Link
                to="#"
                onClick={goToTop}
                className={show ? "slide-top show" : "slide-top"}
                id="back-to-top"
            ></Link>
        </>
    );
}
