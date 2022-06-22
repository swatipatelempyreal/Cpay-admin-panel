import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const ForgotPassword = () => {
  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter Email"),
    password: Yup.string().required("Please Enter Password"),
  });
  const initialValues = {
    email: "",
    password:"",
  };
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <img
              className="img-fluid logo-dark mb-2"
              src="/inner-assets/img/logo.png"
              alt="Logo"
            />
            <div className="loginbox">
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Forgot Password?</h1>
                  <p className="account-subtitle">
                    Enter your email to get a password reset link
                  </p>
                  <Formik
                      initialValues={initialValues}
                     validationSchema={signInSchema}
                     validateOnChange
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}
                  >
                    {(formik) => {
                      const { errors, touched, isValid, } =
                        formik;
                      return (
                        <Form>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <Field
                                type="email"
                                className={`form-control ${
                                  errors.email && touched.email
                                    ? "input-error"
                                    : null
                                }`}
                                name="email"
                              />
                              <ErrorMessage
                                name="email"
                                component="span"
                                className="error"
                              />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-lg btn-block btn-primary w-100">
                        Reset Password
                      </button>
                    </div>
                  </Form>
                      )
                    }}
                 
                  </Formik>
                  <div className="text-center dont-have">
                    Remember your password?{" "}
                    <NavLink to="/auth/login">Login</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
