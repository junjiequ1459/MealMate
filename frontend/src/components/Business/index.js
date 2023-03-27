import React from "react";
import "./Business.css";
import TempImage from "../../assets/tempimage.png";
const BusinessList = ({ businesses }) => {
  function DollarSigns(input) {
    let dollarSigns = [];
    for (
      let i = 0;
      i < parseInt(input.properties.RestaurantsPriceRange2);
      i++
    ) {
      dollarSigns.push(<span key={i}>$</span>);
    }
    return dollarSigns;
  }

  function reviewStar(input) {
    switch (input) {
      case 1:
        return "-53%";
      case 1.5:
        return "-50%";
      case 2:
        return "-58.8%";
      case 2.5:
        return "-56%";
      case 3:
        return "-64.7%";
      case 3.5:
        return "-62%";
      case 4:
        return "-70.6%";
      case 4.5:
        return "-67.8%";
      default:
        return "-73.5%";
    }
  }

  function timeTillClose(input) {
    const [, endTime] = input.hours.Friday.split("-");

    const endHour = parseInt(endTime.split(":")[0]);

    const endTime24 =
      endHour >= 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;

    return endTime24;
  }
  const handleDescriptionClick = (input) => {
    window.open(`/business/${input.business_id}`);
  };

  return (
    <>
      <div className="business-component-container">
        {businesses.map((business, index) => (
          <div
            className="business-component"
            key={business.id}
            onClick={(e) => {
              e.preventDefault();
              handleDescriptionClick(business);
            }}
          >
            <div className="business-flex-container">
              <div className="business-image-container">
                <img
                  className="business-image"
                  key={business.business_id}
                  src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${business.business_id}_photos/1.jpg`}
                  onError={(event) => {
                    event.preventDefault();
                    if (
                      event.target.src ===
                      `https://meal-mate-seeds.s3.amazonaws.com/testfolder/${business.business_id}_photos/1.jpg`
                    ) {
                      console.error(
                        `Failed to load image for business ID ${business.business_id}.`
                      );
                    }
                    event.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <div className="business-text-container">
                  <h2 className="business-name">
                    {index + 1}. {business.name}
                  </h2>
                  <div className="business-review-container">
                    <img
                      className="business-review"
                      style={{
                        translate: `0% ${reviewStar(business.stars)}`,
                      }}
                      src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="business-button-container">
                    {business.categories
                      .split(",")
                      .splice(0, 3)
                      .map((category, index) => (
                        <button className="business-button" key={index}>
                          {category}
                        </button>
                      ))}
                    {DollarSigns(business)} <span>&#x2022;</span>{" "}
                    <span style={{ fontSize: "14px" }}>{business.city}</span>
                  </div>
                  <p className="business-open-till">
                    <span className="business-open-text">Open</span> until{" "}
                    {business.hours.Friday && timeTillClose(business)
                      ? timeTillClose(business)
                      : "12:00 AM"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessList;
