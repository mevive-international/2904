import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../config.json";
import { toast } from "react-toastify";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { isNumber } from "../utils/Functions";

const ContactSchema = Yup.object().shape({
    company: Yup.string().required("Company Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.number("Invalid business phone number").required(
        "Business Phone Number is required"
    ),
});

export default function DownloadBrochureModal({ isOpen, toggle }) {
    const [captcha, setCaptcha] = useState("");

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const submitForm = (values, { setSubmitting, resetForm }) => {
        if (captcha === "") return toast.error("Captcha is required");

        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail5", { ...values, captcha })
            .then(function (response) {
                toast.success(response.data.message);
                resetForm();
                setSubmitting(false);
            })
            .catch(function (error) {
                toast.error(error.response.data.message || error.message);
                setSubmitting(false);
                console.log(error);
            });
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                toggle={toggle}
                className="modal-box exampleModalLong"
            >
                <ModalHeader>
                    <div className="h2">
                        Download <span className="color-orange">Brochure</span>
                    </div>
                    <button type="button" className="close" onClick={toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            con: 11,
                            page: window.location.href,
                            company: "",
                            email: "",
                            phone: "",
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={submitForm}
                    >
                        {({ errors, touched, values, isSubmitting }) => (
                            <Form className="mb-3">
                                <Field
                                    type="hidden"
                                    name="con"
                                    value={values.con}
                                />
                                <Field
                                    type="hidden"
                                    name="page"
                                    value={values.page}
                                />

                                <Field
                                    type="text"
                                    name="company"
                                    placeholder="Company Name*"
                                    value={values.company}
                                />
                                {errors.company && touched.company ? (
                                    <label className="error">
                                        {errors.company}
                                    </label>
                                ) : null}

                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Business Email*"
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <label className="error">
                                        {errors.email}
                                    </label>
                                ) : null}

                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Business Phone Number*"
                                    value={values.phone}
                                    onKeyPress={(event) => isNumber(event)}
                                />
                                {errors.phone && touched.phone ? (
                                    <label className="error">
                                        {errors.phone}
                                    </label>
                                ) : null}

                                <div className="text-center mb-3">
                                    <ReCAPTCHA
                                        style={{ display: "inline-block" }}
                                        sitekey={constants.GOOGLE_RECAPTCHA_KEY}
                                        onChange={onCaptchaChange}
                                    />
                                </div>

                                <div className="clear"></div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        value={
                                            isSubmitting
                                                ? "Please Wait"
                                                : "Download Brochure"
                                        }
                                        id="sub4"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    );
}
