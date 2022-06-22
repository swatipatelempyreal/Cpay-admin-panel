import React from "react";
import { NavLink } from "react-router-dom";
const ForgotPassword = () => {
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

                  <form>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-lg btn-block btn-primary w-100">
                        Reset Password
                      </button>
                    </div>
                  </form>

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
