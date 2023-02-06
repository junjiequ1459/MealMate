import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
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

  return (
    <div class="signup-form-container">
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <p class="red-text">Sign Up for Yelp</p>
        <p class="new-text">Connect with great local businesses</p>
        <p class="terms-text">
          By continuing, you agree to Yelp's Terms of Service and ackowlege
          Yelp's Private Policy
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
            type="text"
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
        <button class="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <img
        class="sign-up-image"
        src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
      ></img>
    </div>
  );
}

export default SignupFormPage;
