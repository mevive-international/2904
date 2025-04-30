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
    message: Yup.string()
        .required("Requirements is required")
        .test('no-url-or-domain', 'Requirements must not contain URLs or domains', (value) => {
            const urlPattern = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;
            return !urlPattern.test(value || '');
        })
        .test('no-domain-alone', 'Requirements must not contain domains', (value) => {
            const domainPattern = /(?:^|\s)([-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_+.~#?&//=]*)\b)(?=$|\s)/gi;
            return !domainPattern.test(value || '');
        })
        .max(300, "Maximum 300 characters allowed"),
});

export default function ContactInfoForm({ appData }) {
    const [category, setCategory] = useState("");
    const [captcha, setCaptcha] = useState("");

    const changeCategory = (event) => {
        setCategory(event.target.value);
    };

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const submitForm = (values, { setSubmitting, resetForm }) => {
        if (captcha === "") return toast.error("Captcha is required");

        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail", {
                ...values,
                category,
                captcha,
            })
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
            <div
                className="form-inner"
                style={{ margin: "0px", padding: "0px 50px" }}
            >
                <Formik
                    initialValues={{
                        con: 1,
                        company: "",
                        username: "",
                        location: "",
                        email: "",
                        phone: "",
                        message: "",
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={submitForm}
                >
                    {({ errors, touched, values, isSubmitting, form }) => (
                        <Form className="mb-3">
                            <div className="row clearfix">
                                <Field
                                    type="hidden"
                                    name="con"
                                    value={values.con}
                                />
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Contact Person"
                                        value={values.username}
                                    />
                                    {errors.username && touched.username ? (
                                        <label className="error">
                                            {errors.username}
                                        </label>
                                    ) : null}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
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
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <select
                                        name="category"
                                        id="category"
                                        style={{ width: "100%" }}
                                        onChange={changeCategory}
                                    >
                                        <option value="">
                                            Interested Category
                                        </option>
                                        {appData.category &&
                                            appData.category.map((value, i) => {
                                                return (
                                                    <option
                                                        value={value.ca_title}
                                                        key={i}
                                                    >
                                                        {value.ca_title}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                    {errors.category && touched.category ? (
                                        <label className="error">
                                            {errors.category}
                                        </label>
                                    ) : null}
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <Field
                                        type="text"
                                        component="textarea"
                                        name="message"
                                        placeholder="Requirements*"
                                        value={values.message}
                                    />
                                    {errors.message && touched.message ? (
                                        <label className="error">
                                            {errors.message}
                                        </label>
                                    ) : null}
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <ReCAPTCHA
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
                                                : "Submit"
                                        }
                                        disabled={
                                            isSubmitting
                                                ? true
                                                : false
                                        }
                                        id="sub4"
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
