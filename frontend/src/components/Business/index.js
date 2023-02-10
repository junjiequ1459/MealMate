import React, { useState, useEffect } from "react";
import "./Business.css";
const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("api/businesses")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setBusinesses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="business-component-container">
      {businesses.map((business) => (
        <div className="business-component" key={business.id}>
          {business.name} {business.postal_code},{business.stars}
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
