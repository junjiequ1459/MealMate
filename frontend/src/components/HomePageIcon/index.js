import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePageIcon.css";

function HomeIcon({ page }) {
  let className = "home-index-icon";

  if (page === "white") {
    className = "home-index-icon-white";
  }

  const history = useHistory();

  const handlePageClick = () => {
    history.push("/");
  };

  return (
    <div className="icon-container">
      <p className={className} onClick={handlePageClick}>
        MealMate
      </p>
    </div>
  );
}

export default HomeIcon;
