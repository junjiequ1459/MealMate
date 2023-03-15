import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout()).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <div className="profile-icon">
        <button onClick={openMenu}>
          <i className="fa-solid fa-user-circle" />
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <div className="drop-down-container">
              <div className="first-last-container">
                <li>
                  <i className="fa-regular fa-circle-user"></i>
                  <div className="profile-list">
                    {user.fname}
                    {user.lname}
                  </div>
                </li>
              </div>
              <li>
                <button
                  id="log-out-button"
                  onClick={logout}
                  className="logout-button"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  <div className="logout-text">Log Out</div>
                </button>
              </li>
            </div>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
