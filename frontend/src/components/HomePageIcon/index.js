import React from "react";
import { useHistory } from "react-router-dom";
import "./HomePageIcon.css";
import burstImage from "../../assets/yelp_burst.png";

function HomeIcon({ page }) {
  let HomeButtonclassName = "home-index-icon";

  if (page === "white") {
    HomeButtonclassName = "home-index-icon-white";
  }

  const history = useHistory();

  const handlePageClick = () => {
    history.push("/");
  };

  const handleYelpClick = () => {
    window.location.href = "https://www.yelp.com";
  };

  return (
    <div className="icon-container">
      <h1 className={HomeButtonclassName} onClick={handlePageClick}>
        MealMate
      </h1>
      <div className="splash-container">
        <img
          className="yelp-splash"
          src={burstImage}
          onClick={handleYelpClick}
        ></img>
      </div>
    </div>
  );
}

export default HomeIcon;
