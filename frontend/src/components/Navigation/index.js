import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import HomeIcon from "../HomePageIcon";

function Navigation({ page }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let signInButton = "sign-in-button";
  let signUpButton = "sign-up-button";

  if (page === "business-page") {
    signInButton = "sign-in-button-dark";
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
      {sessionLinks}
    </div>
  );
}

export default Navigation;
