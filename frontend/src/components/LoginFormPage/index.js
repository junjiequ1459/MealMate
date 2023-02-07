import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import HomeIcon from "../HomePageIcon";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      () => {
        setErrors(["invalid credentials"]);
      }
    );
  };

  return (
    <>
      <HomeIcon />
      <div className="page-container">
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <p className="red-text">Log in to yelp</p>
            <p className="new-text">New to yelp? </p>
            <p className="terms-text">
              By logging in, you agree to Yelp's Terms of Service and Privacy
              Policy.
            </p>
            <label>
              <input
                placeholder="Email"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label>
              <input
                placeholder="Password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="login-button" type="submit">
              Log In
            </button>
          </form>
        </div>
        <img
          className="sign-in-image"
          src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
        ></img>
      </div>
    </>
  );
}

export default LoginFormPage;
