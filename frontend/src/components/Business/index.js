import React, { useState, useEffect } from "react";

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/businesses")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => setBusinesses(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {businesses.map((business) => (
        <div key={business.id}>{business.name}</div>
      ))}
    </div>
  );
};

export default BusinessList;
