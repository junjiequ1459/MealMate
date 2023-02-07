import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePageIcon.css";

function HomeIcon() {
  const history = useHistory();

  const handlePageClick = () => {
    history.push("/");
  };

  return (
    <div className="icon-container">
      <p className="home-index-icon" onClick={handlePageClick}>
        MealMate
      </p>
    </div>
  );
}

export default HomeIcon;
