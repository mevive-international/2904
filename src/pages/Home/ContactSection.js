import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../../config.json";
import { toast } from "react-toastify";

const ContactSchema = Yup.object().shape({
    username: Yup.string().required("Company Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    phone: Yup.number("Invalid business phone number").required(
        "Business Phone Number is required"
    ),
    subject: Yup.string().required("Requirements is required"),
});

export default function ContactSection() {
    const submitForm = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail2", values)
            .then(function (response) {
                toast.success(response.data.message);
                resetForm();
                setSubmitting(false);
            })
            .catch(function (error) {
                toast.error(error.message);
                setSubmitting(false);
                console.log(error);
            });
    };

    return (
        <>
            <section className="get-call-back">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Get a call back</h2>

                            <div className="contact-icons">
                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/map.webp"
                                            alt="Map Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Address</h5>
                                        <p>
                                            {" "}
                                            M3, Mayflower Metropolis,
                                            Udayampalayam Road, Sowripalayam,
                                            Coimbatore 641028 Tamilnadu, India.{" "}
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/call.webp"
                                            alt="Call Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Business Phone Number</h5>
                                        <p>
                                            <a
                                                href="tel:+91 7540073991"
                                                style={{ color: "#000" }}
                                            >
                                                {" "}
                                                +91 7540073991
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img
                                            src="images/icons/email.webp"
                                            alt="Email Icon"
                                        />
                                    </div>
                                    <div className="col-md-10">
                                        <h5>Email Address</h5>
                                        <p>
                                            {" "}
                                            <a
                                                href="mailto:sales@meviveinternational.com"
                                                style={{ color: "#000" }}
                                            >
                                                sales@meviveinternational.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2>Enquiry Form</h2>

                            <div className="enquiry-form">
                                <Formik
                                    initialValues={{
                                        con: 2,
                                        username: "",
                                        email: "",
                                        phone: "",
                                        subject: "",
                                    }}
                                    validationSchema={ContactSchema}
                                    onSubmit={submitForm}
                                >
                                    {({
                                        errors,
                                        touched,
                                        values,
                                        isSubmitting,
                                    }) => (
                                        <Form>
                                            <Field
                                                type="hidden"
                                                name="con"
                                                value={values.con}
                                            />

                                            <Field
                                                type="text"
                                                name="username"
                                                placeholder="Company Name*"
                                                value={values.username}
                                            />
                                            {errors.username &&
                                            touched.username ? (
                                                <label className="error">
                                                    {errors.username}
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
                                            />
                                            {errors.phone && touched.phone ? (
                                                <label className="error">
                                                    {errors.phone}
                                                </label>
                                            ) : null}

                                            <Field
                                                type="text"
                                                name="subject"
                                                component="textarea"
                                                rows="4"
                                                placeholder="Post your requirements*"
                                                value={values.subject}
                                            />
                                            {errors.subject &&
                                            touched.subject ? (
                                                <label className="error">
                                                    {errors.subject}
                                                </label>
                                            ) : null}
                                            <div className="clear"></div>

                                            <input
                                                type="submit"
                                                value={
                                                    isSubmitting
                                                        ? "Please Wait"
                                                        : "Submit"
                                                }
                                                id="sub4"
                                            />
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
