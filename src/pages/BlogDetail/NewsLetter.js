import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../../config.json";
import { toast } from "react-toastify";

const NewsletterSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

export default function NewsLetter() {
    const submitForm = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "subscribe", values)
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
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow p-5">
                        <h4>Subscribe To Our Newsletter</h4>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            validationSchema={NewsletterSchema}
                            onSubmit={submitForm}
                        >
                            {({ errors, touched, values, isSubmitting }) => (
                                <Form id="newsletter-form2">
                                    <Field
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your Business Email"
                                        value={values.email}
                                    />
                                    {errors.email && touched.email ? (
                                        <div className="error pb-2">
                                            {errors.email}
                                        </div>
                                    ) : null}

                                    <p>
                                        We're committed to your privacy. We uses
                                        the information you provide to us to
                                        contact you about our relevant content,
                                        products, and services. You may
                                        unsubscribe from these communications at
                                        any time.
                                    </p>

                                    <button
                                        type="submit"
                                        className="btn btn-danger btn-block mt-3 rounded-pill"
                                        id="sub2"
                                        name="submit"
                                    >
                                        {isSubmitting
                                            ? "Please Wait"
                                            : "Subscribe"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}
