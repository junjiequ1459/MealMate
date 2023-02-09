import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ page }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let signInButton = "sign-in-button";
  let signUpButton = "sign-up-button";
  let GithubclassName = "fa-brands-light";

  if (page === "business-page") {
    signInButton = "sign-in-button-dark";
    GithubclassName = "fa-brands-dark";
  }

  const handleLogInButtonClick = () => {
    history.push("/login");
  };

  const handleSignUpButtonClick = () => {
    history.push("/signup");
  };

  const handleBusinessPageClick = () => {
    history.push("/business");
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
        <form
          className="form-inliMealMatene "
          onSubmit={handleBusinessPageClick}
        >
          <input
            className="form-control"
            type="search"
            placeholder="tacos, cheap dinner, Max's"
            aria-label="Search"
          />
          <button className="btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
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
