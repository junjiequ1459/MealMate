import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
// import Navigation from "../Navigation";
import { NavLink } from "react-router-dom";
import HomeIcon from "../HomePageIcon";

import "./SignupForm.css";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(
      sessionActions.signup({
        email,
        password,
        fname,
        lname,
        zipcode,
      })
    ).catch(async (res) => {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) setErrors(data.errors);
      else if (data) setErrors([data]);
      else setErrors([res.statusText]);
    });
  };

  const loginDemo = (e) => {
    e.preventDefault();
    dispatch(
      sessionActions.login({
        credential: "rexqu2000@gmail.com",
        password: 198891,
      })
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

  const signin = (
    <NavLink to="/login">
      <button className="anchor-style-button">Log In</button>
    </NavLink>
  );

  return (
    <>
      <HomeIcon />
      <hr></hr>
      <div className="page-container">
        <div className="business-background-color"></div>

        <div className="flex">
          <div className="signup-form-container">
            <form onSubmit={handleSubmit}>
              {errors.length > 0 && (
                <div className="errors">
                  <ul>
                    {errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p className="red-text">Sign Up for MealMate</p>
              <p className="new-text">Connect with great local businesses</p>
              <p className="terms-text">
                By continuing, you agree to MealMate's {terms} and ackowlege
                MealMate's {privatePolicy}
              </p>
              <label>
                <input
                  id="first-name"
                  placeholder="FirstName"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  id="last-name"
                  placeholder="LastName"
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <label>
                <input
                  placeholder="Zipcode"
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                />
              </label>
              <button className="signup-button" type="submit">
                Sign Up
              </button>
              <button
                className="signup-button"
                type="submit"
                onClick={loginDemo}
              >
                Demo Login
              </button>
              <p className="small-login-text">Already on Mealmate? {signin}</p>
            </form>
          </div>
          <img
            className="sign-up-image"
            src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
          alt="img broken"></img>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
