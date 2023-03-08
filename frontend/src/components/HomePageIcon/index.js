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
    window.open("https://www.yelp.com", "_blank");
  };

  return (
    <div className="icon-container">
      <div>
        <h1 className={HomeButtonclassName} onClick={handlePageClick}>
          MealMate
        </h1>
      </div>
      <div>
        <img
          className="yelp-splash"
          src={burstImage}
          onClick={handleYelpClick}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default HomeIcon;
