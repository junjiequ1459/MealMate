import React from "react";
import "./Business.css";
import fileNotFound from "../../assets/file.png";

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

  return (
    <div className="business-component-container">
      {businesses.slice(0, 10).map((business) => (
        <>
          <div className="business-component" key={business.id}>
            <div className="business-image-container">
              <img className="business-image" src={fileNotFound}></img>
            </div>
            <div>
              <h2 className="business-name">{business.name} </h2>
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
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BusinessList;
