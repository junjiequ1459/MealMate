import React from "react";
import { timeTillClose } from "../../utils";
import { reviewStar } from "../../utils";
import { priceRange } from "../../utils";

function BusinessHeader({ showData }) {
  return (
    <div className="show-page-header">
      <h1 className="show-page-name">{showData.name}</h1>
      <div className="show-review-container">
        <img
          className="business-review"
          style={{
            translate: `0% ${reviewStar(showData.stars)}`,
          }}
          src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
          alt=""
        ></img>
      </div>
      <div className="show-description">
        <i
          className="fa-solid fa-circle-check"
          style={{ color: "rgba(88,180,255,1)" }}
        ></i>{" "}
        <span style={{ color: "rgba(88,180,255,1)" }}>Claimed</span> &#x2022;{" "}
        {showData.properties &&
          priceRange(showData.properties.RestaurantsPriceRange2)}{" "}
        &#x2022; {showData.categories}{" "}
        <div className="show-open-text-container">
          <span className="show-open-text">Open </span>
          {showData.hours && timeTillClose(showData, "Friday")
            ? timeTillClose(showData, "Friday", "open")
            : "10:00 AM"}
          {" - "}
          {showData.hours && timeTillClose(showData, "Friday")
            ? timeTillClose(showData, "Friday")
            : "12:00 AM"}
        </div>
      </div>
    </div>
  );
}

export default BusinessHeader;
