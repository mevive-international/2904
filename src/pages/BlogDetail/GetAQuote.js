import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../../config.json";
import { toast } from "react-toastify";
import { isNumber } from "../../utils/Functions";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSchema = Yup.object().shape({
    company: Yup.string().required("Company Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.number("Invalid business phone number").required(
        "Business Phone Number is required"
    ),
    message: Yup.string().required("Requirements is required"),
});

export default function GetAQuote() {
    const [captcha, setCaptcha] = useState("");

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const submitForm = (values, { setSubmitting, resetForm }) => {
        if (captcha === "") return toast.error("Captcha is required");

        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail3", { ...values, captcha })
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
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow p-5 get">
                        <h4 className="mb-3">Get a Quote</h4>
                        <Formik
                            initialValues={{
                                con: 3,
                                company: "",
                                email: "",
                                phone: "",
                                message: "",
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={submitForm}
                        >
                            {({ errors, touched, values, isSubmitting }) => (
                                <Form>
                                    <Field
                                        type="hidden"
                                        name="con"
                                        value={values.con}
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

                                    <Field
                                        type="text"
                                        name="message"
                                        component="textarea"
                                        rows="4"
                                        placeholder="Post your requirements*"
                                        value={values.message}
                                    />
                                    {errors.message && touched.message ? (
                                        <label className="error">
                                            {errors.message}
                                        </label>
                                    ) : null}

                                    <div className="text-center mb-3">
                                        <ReCAPTCHA
                                            style={{ display: "inline-block" }}
                                            sitekey={
                                                constants.GOOGLE_RECAPTCHA_KEY
                                            }
                                            onChange={onCaptchaChange}
                                        />
                                    </div>

                                    <div className="clear"></div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-danger btn-block mt-3 rounded-pill"
                                        >
                                            {isSubmitting
                                                ? "Please Wait"
                                                : "Submit"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}
