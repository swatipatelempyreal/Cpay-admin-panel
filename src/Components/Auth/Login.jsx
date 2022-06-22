import React from "react";
import { NavLink } from 'react-router-dom'
const Login = () => {
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
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email Address
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <div className="pass-group">
                        <input
                          type="password"
                          className="form-control pass-input"
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
                            <label className="custom-control-label" for="cb1">
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
                      className="btn btn-lg btn-block btn-primary w-100"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="login-or"></div>
                  </form>
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
