import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../../config.json";
import { toast } from "react-toastify";
import { isNumber } from "../../utils/Functions";
import ReCAPTCHA from "react-google-recaptcha";

const FILE_SIZE = 2000 * 1024; // 2 MB
const SUPPORTED_FORMATS = ["application/pdf", "application/docx"];
const CandidateApplySchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.number("Invalid phone number").required(
        "Phone Number is required"
    ),
    message: Yup.string().required("Message is required"),
    file: Yup.mixed()
        .required("Resume is required")
        .test("fileSize", "File too large. Upload less than 2MB", (value) => {
            return value && value.size <= FILE_SIZE;
        })
        .test(
            "fileFormat",
            "Only allowed pdf, docx file are allowed",
            (value) => value && SUPPORTED_FORMATS.includes(value.type)
        ),
});

export default function CandidateApply({ appData }) {
    const [captcha, setCaptcha] = useState("");

    const onCaptchaChange = (value) => {
        setCaptcha(value);
    };

    const submitForm = (values, { setSubmitting, resetForm }) => {
        if (captcha === "") return toast.error("Captcha is required");

        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("message", values.message);
        formData.append("job", values.job);
        formData.append("file", values.file);
        formData.append("captcha", captcha);
        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "careermail", formData)
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
            {appData && appData.career_details && (
                <div className="single-candidate-widget-2">
                    <h3>Work With Us !</h3>
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            phone: "",
                            message: "",
                            job: appData.career_details[0].car_title,
                            file: "",
                        }}
                        validationSchema={CandidateApplySchema}
                        onSubmit={submitForm}
                    >
                        {({
                            errors,
                            touched,
                            values,
                            isSubmitting,
                            setFieldValue,
                        }) => (
                            <Form className="mb-3">
                                <Field
                                    type="hidden"
                                    name="job"
                                    value={values.job}
                                />
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="Your Name*"
                                    value={values.username}
                                />
                                {errors.username && touched.username ? (
                                    <label className="error">
                                        {errors.username}
                                    </label>
                                ) : null}

                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone Number*"
                                    value={values.phone}
                                    onKeyPress={(event) => isNumber(event)}
                                />
                                {errors.phone && touched.phone ? (
                                    <label className="error">
                                        {errors.phone}
                                    </label>
                                ) : null}

                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Your Email Address*"
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <label className="error">
                                        {errors.email}
                                    </label>
                                ) : null}

                                <div>
                                    <label>Upload Resume</label>
                                    <input
                                        type="file"
                                        name="file"
                                        placeholder="Resume*"
                                        accept="application/pdf,application/docx"
                                        onChange={(event) => {
                                            setFieldValue(
                                                "file",
                                                event.currentTarget.files[0]
                                            );
                                        }}
                                    />
                                    <div
                                        style={{
                                            color: "red",
                                            fontWeight: "bold",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Only allowed pdf, docx file and below
                                        2MB
                                    </div>
                                    {errors.file && touched.file ? (
                                        <label className="error">
                                            {errors.file}
                                        </label>
                                    ) : null}
                                </div>

                                <Field
                                    type="text"
                                    name="message"
                                    component="textarea"
                                    rows="4"
                                    placeholder="Write here your message*"
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
                                        sitekey={constants.GOOGLE_RECAPTCHA_KEY}
                                        onChange={onCaptchaChange}
                                    />
                                </div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        className="btn btn-primary"
                                        value={
                                            isSubmitting
                                                ? "Please Wait"
                                                : "Apply"
                                        }
                                        id="sub3"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    );
}
