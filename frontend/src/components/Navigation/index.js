import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ page }) {
  const [formInput, setFormInput] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let signInButton = "sign-in-button-dark";
  let signUpButton = "sign-up-button";
  let GithubclassName = "fa-brands-dark";

  if (page === "white") {
    signInButton = "sign-in-button";
    GithubclassName = "fa-brands-light";
  }

  const handleLogInButtonClick = () => {
    history.push("/login");
  };

  const handleSignUpButtonClick = () => {
    history.push("/signup");
  };

  const handleBusinessPageSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/business",
      state: {
        data: {
          category: formInput.charAt(0).toUpperCase() + formInput.slice(1),
        },
      },
    });
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <button className={signInButton} onClick={handleLogInButtonClick}>
          Log in
        </button>
        <button className={signUpButton} onClick={handleSignUpButtonClick}>
          Sign Up
        </button>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <div className="search-container">
        <form onSubmit={handleBusinessPageSubmit}>
          <input
            className="form-control"
            type="text"
            value={formInput}
            placeholder="Tacos, cheap dinner, Max's"
            onChange={(event) => setFormInput(event.target.value)}
          />
          <button className="btn" type="submit">
            <i className="fa-solid fa-magnifying-glass nav-mag-glass"></i>
          </button>
        </form>
      </div>
      <div className="fa-brands-container">
        <a href="https://github.com/junjiequ1459" target="_blank">
          <i className={`${GithubclassName} fa-brands fa-github`}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/junjie-qu-239070169/"
          target="_blank"
        >
          <i className={`${GithubclassName} fa-brands fa-linkedin`}></i>
        </a>
        <a href="https://angel.co/jobs" target="_blank">
          <i className={`${GithubclassName} fa-brands fa-angellist`}></i>
        </a>
      </div>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
