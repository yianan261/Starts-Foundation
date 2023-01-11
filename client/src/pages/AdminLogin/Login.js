import React, { useState } from "react";
import useForm from "../../utils/useForm";
import validate from "../../utils/LoginFormValidationRules";
import "./Login.css";
import { redirect } from "react-router-dom";

const Login = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return redirect("/about");
  }

  return (
    <div className="main login-background">
      <div className="is-fullheight">
        {loggedIn && redirect("/about")}
        <div className="auth-container">
          <div className="column auth-content">
            <div className="box">
              <h1 className="auth-form-title">Admin Login</h1>
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input
                      autoComplete="off"
                      className={`input ${errors.email && "is-danger"}`}
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email || ""}
                      required
                    />
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className={`input ${errors.password && "is-danger"}`}
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password || ""}
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>
                <div className="forgetPassword">
                  <a href="/forgetPassword">Forget Password?</a>
                </div>
                <span className="btnSpan">
                  <button type="submit" className="submitBtn btn btn-primary">
                    Login
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
