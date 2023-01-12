import React, { useState } from "react";
import useForm from "../../pages/AdminLogin/useForm";
import validate from "../../utils/LoginFormValidationRules";
import "./CreateAdmin.css";
import { redirect } from "react-router-dom";

/**
 * function for login
 * @param {props} props
 * @returns JSX of login page
 */
const CreateAdmin = (props) => {
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
    <div className="form-div">
      {loggedIn && redirect("/about")}
      <div className="auth-container">
        <div className="column auth-content">
          <div className="box">
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    placeholder="abc@gmail.com"
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
              <div className="field">
                <label className="label">Confirm Password</label>
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
                <a href="/forget-password">Forget Password?</a>
              </div>
              <span className="btnSpan">
                <button type="submit" className="submitBtn btn btn-primary">
                  Create
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateAdmin.propTypes = {};
export default CreateAdmin;
