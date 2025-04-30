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

export default function Newsletter() {
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
            <Formik
                initialValues={{
                    email: "",
                }}
                validationSchema={NewsletterSchema}
                onSubmit={submitForm}
            >
                {({ errors, touched, values, isSubmitting }) => (
                    <Form id="newsletter-form">
                        <Field
                            type="text"
                            name="email"
                            placeholder="Enter your Business E-mail"
                            value={values.email}
                        />
                        {errors.email && touched.email ? (
                            <div className="error pb-2">{errors.email}</div>
                        ) : null}

                        <button
                            type="submit"
                            className="news-submit"
                            id="sub2"
                            name="submit"
                        >
                            {isSubmitting ? "Please Wait" : "Subscribe"}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}
