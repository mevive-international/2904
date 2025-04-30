import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../config.json";
import { toast } from "react-toastify";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { isNumber } from "../utils/Functions";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSchema = Yup.object().shape({
    company: Yup.string().required("Company Name is required"),
    email: Yup.string().email("Invalid email address"),
    phone: Yup.number("Invalid business phone number").required(
        "Business Phone Number is required"
    ),
    samples: Yup.string()
        .required("Required Samples is required")
        .test(
            "no-url-or-domain",
            "Required Samples must not contain URLs or domains",
            (value) => {
                const urlPattern =
                    /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
                return !urlPattern.test(value || "");
            }
        )
        .test(
            "no-domain-alone",
            "Required Samples must not contain domains",
            (value) => {
                const domainPattern =
                    /(?:^|\s)([-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)\b)(?=$|\s)/gi;
                return !domainPattern.test(value || "");
            }
        )
        .max(300, "Maximum 300 characters allowed"),
});

export default function FreeSampleModal({ isOpen, toggle }) {
    const [captcha, setCaptcha] = useState("");

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const submitForm = (values, { setSubmitting, resetForm }) => {
        // if (captcha === "") return toast.error("Captcha is required");

        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail6", { ...values, captcha })
            .then(function (response) {
                toast.success(response.data.message);
                resetForm();
                toggle();
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
                        Order <span className="color-orange">Free</span> Samples
                    </div>
                    <button type="button" className="close" onClick={toggle}>
                        <span aria-hidden="true">×</span>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            page: window.location.href,
                            company: "",
                            location: "",
                            email: "",
                            phone: "",
                            application: "",
                            samples: "",
                        }}
                        validationSchema={ContactSchema}
                        onSubmit={submitForm}
                    >
                        {({ errors, touched, values, isSubmitting }) => (
                            <Form className="mb-3">
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
                                    name="location"
                                    placeholder="Location"
                                    value={values.location}
                                />
                                {errors.location && touched.location ? (
                                    <label className="error">
                                        {errors.location}
                                    </label>
                                ) : null}

                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Business Email"
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

                                <Field
                                    type="text"
                                    name="application"
                                    placeholder="End Application"
                                    value={values.application}
                                />
                                {errors.application && touched.application ? (
                                    <label className="error">
                                        {errors.application}
                                    </label>
                                ) : null}

                                <Field
                                    type="text"
                                    name="samples"
                                    placeholder="Required Samples*"
                                    value={values.samples}
                                />
                                {errors.samples && touched.samples ? (
                                    <label className="error">
                                        {errors.samples}
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
                                                : "Send Message"
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
