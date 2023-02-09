import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
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

  const terms = (
    <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/">
      Terms of Service
    </a>
  );

  const privatePolicy = (
    <a href="https://terms.yelp.com/privacy/en_us/20220831_en_us/">
      Private Policy
    </a>
  );

  const errorName = "errors";
  const signup = (
    <NavLink to="/signup">
      <a>Sign Up</a>
    </NavLink>
  );
  return (
    <>
      <HomeIcon />
      <hr></hr>
      <img
        className="sign-in-image"
        src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
      ></img>
      <div className="page-container">
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
              <div className={errorName}>
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <p className="red-text">Log in to MealMate</p>
            <p className="new-text">New to MealMate? {signup}</p>
            <p className="terms-text">
              By logging in, you agree to MealMate's {terms} and {privatePolicy}
              .
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
      </div>
    </>
  );
}

export default LoginFormPage;
