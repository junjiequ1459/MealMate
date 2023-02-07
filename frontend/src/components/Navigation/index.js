import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const handleLogInButtonClick = () => {
    history.push("/login");
  };

  const handleSignUpButtonClick = () => {
    history.push("/signup");
  };

  const handleHomePageClick = () => {
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <button className="sign-in-button" onClick={handleLogInButtonClick}>
          Log in
        </button>
        <button className="sign-up-button" onClick={handleSignUpButtonClick}>
          Sign Up
        </button>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <p className="index-icon" onClick={handleHomePageClick}>
        MealMate
      </p>
      <div className="search-container">
        <form className="form-inline ">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
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
