import React from "react";
import { NavLink } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
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
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
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
                      const { errors, touched, isValid, } = formik;
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
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <Field
                          type="password"
                          className={`form-control ${
                                  errors.password && touched.password
                                    ? "input-error"
                                    : null
                                }`}
                                name="password"
                              />
                             <ErrorMessage
                                name="password"
                                component="span"
                                className="error"
                              /> 
                        <span className="fas fa-eye toggle-password"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cb1"
                            />
                            <label className="custom-control-label" htmlFor="cb1">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          
                          <NavLink to="/auth/forgot-password">Forgot Password ?</NavLink>
                            
                        </div>
                      </div>
                    </div>
                    <button
                      
                            type="submit"
                            className={`btn btn-lg btn-block btn-primary w-100 ${!isValid ? "disabled-btn" : ""}`}
                            disabled={!isValid}
                    >
                      Login
                    </button>
                    <div className="login-or"></div>
                    </Form>
                      )
                    }}
                
                    </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
