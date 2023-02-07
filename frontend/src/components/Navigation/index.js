import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  }
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink to="/login">Log In</NavLink>
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  const handleLogInButtonClick = () => {
    history.push("/login");
  };

  const handleSignUpButtonClick = () => {
    history.push("/signup");
  };
  return (
    <div class="nav-bar">
      {sessionLinks}
      <button className="sign-in-button" onClick={handleLogInButtonClick}>
        Sign In
      </button>
      <button className="sign-up-button" onClick={handleSignUpButtonClick}>
        Sign Up
      </button>
    </div>
  );
}

export default Navigation;
