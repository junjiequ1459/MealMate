import React from "react";
import "./Business.css";

const BusinessList = ({ businesses }) => {
  return (
    <div className="business-component-container">
      {businesses.map((business) => (
        <div className="business-component" key={business.id}>
          {business.name} {business.postal_code} {business.stars}
          {/* <div className="business-properties">{Object.entries(business.properties)}</div> */}
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
