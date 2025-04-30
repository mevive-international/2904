import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import constants from "../../config.json";
import { toast } from "react-toastify";

const CommentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    message: Yup.string().required("Message is required"),
});
export default function PostComment({ appData }) {
    const submitForm = (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        axios
            .post(constants.API_BASE_URL + "sendmail4", values)
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
            {appData && appData.blog && (
                <div className="contact-form article-comment">
                    <h4>Leave a Reply</h4>
                    <Formik
                        initialValues={{
                            con: 4,
                            blog_id: appData.blog[0].id,
                            name: "",
                            email: "",
                            message: "",
                        }}
                        validationSchema={CommentSchema}
                        onSubmit={submitForm}
                    >
                        {({ errors, touched, values, isSubmitting, form }) => (
                            <Form>
                                <Field
                                    type="hidden"
                                    name="con"
                                    value={values.con}
                                />
                                <Field
                                    type="hidden"
                                    name="blog_id"
                                    value={values.blog_id}
                                />
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name *"
                                                value={values.name}
                                            />
                                            {errors.name && touched.name ? (
                                                <label className="error">
                                                    {errors.name}
                                                </label>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Business Email *"
                                                value={values.email}
                                            />
                                            {errors.email && touched.email ? (
                                                <label className="error">
                                                    {errors.email}
                                                </label>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field
                                                type="text"
                                                component="textarea"
                                                name="message"
                                                className="form-control"
                                                placeholder="Your message *"
                                                value={values.message}
                                            />
                                            {errors.message &&
                                            touched.message ? (
                                                <label className="error">
                                                    {errors.message}
                                                </label>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button
                                                className="px-btn theme"
                                                id="sub11"
                                            >
                                                <span>
                                                    {isSubmitting
                                                        ? "Please Wait"
                                                        : "Submit"}
                                                </span>{" "}
                                                <i className="arrow"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            )}
        </>
    );
}
