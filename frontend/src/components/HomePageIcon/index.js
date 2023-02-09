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
      <h1 className={className} onClick={handlePageClick}>
        MealMate
      </h1>
    </div>
  );
}

export default HomeIcon;
