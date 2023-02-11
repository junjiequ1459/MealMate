import React from "react";
import "./Business.css";
import fileNotFound from "../../assets/file.png";

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-component-container">
      {businesses.slice(0, 10).map((business) => (
        <>
          <div className="business-component" key={business.id}>
            <div className="business-image-container">
              <img className="business-image" src={fileNotFound}></img>
            </div>
            <h1 className="business-name">{business.name} </h1>
            {business.categories
              .split(",")
              .splice(0, 3)
              .map((category) => (
                <button className="business-button" key={category}>
                  {category}
                </button>
              ))}
          </div>  
        </>
      ))}
    </div>
  );
};

export default BusinessList;
