import React from "react";
import "./Business.css";
import fileNotFound from "../../assets/file.png";
import { useHistory, Route, useParams } from "react-router-dom";
const BusinessList = ({ businesses }) => {
  const history = useHistory();
  const { businessId } = useParams();
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
        return "-59%";
      case 2.5:
        return "-56%";
      case 3:
        return "-64.5%";
      case 3.5:
        return "-62%";
      case 4:
        return "-70.6%";
      case 4.5:
        return "-67.8%";
      case 5:
      default:
        return "-73.7%";
    }
  }

  function timeTillClose(input) {
    const [startTime, endTime] = input.hours.Friday.split("-");

    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);

    const startTime24 =
      startHour >= 12 ? `${startHour}:00 PM` : `${startHour}:00 AM`;
    const endTime24 =
      endHour >= 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;

    return endTime24;
  }
  const handleDescriptionClick = (input) => {
    history.push({
      pathname: `/business/${input.business_id}`,
    });
  };

  return (
    <>
      <div className="business-component-container">
        {businesses.slice(0, 10).map((business, index) => (
          <div
            className="business-component"
            key={business.id}
            onClick={() => handleDescriptionClick(business)}
          >
            <div className="business-image-container">
              <img className="business-image" src={fileNotFound}></img>
            </div>
            <div>
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
                ></img>
              </div>
              <div className="business-button-container">
                {business.categories
                  .split(",")
                  .splice(0, 3)
                  .map((category) => (
                    <button className="business-button" key={category.id}>
                      {category}
                    </button>
                  ))}
                {DollarSigns(business)} <span>&#x2022;</span> {business.city}
              </div>
              <p className="business-open-till">
                <span style={{ color: "darkgreen" }}>Open</span> until{" "}
                {business.hours.Friday && timeTillClose(business)
                  ? timeTillClose(business)
                  : "12:00 AM"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BusinessList;
