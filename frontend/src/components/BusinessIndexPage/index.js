import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useState, useEffect } from "react";
import HomeIcon from "../HomePageIcon";
import { useLocation } from "react-router-dom";
import BusinessList from "../Business";

function BusinessIndexPage() {
  const location = useLocation();
  const data = (location.state && location.state.data) || {};
  const [businesses, setBusinesses] = useState([]);
  const searchInput = data.category;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("api/businesses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const filteredData = data.filter((business) => {
          const categoriesArray = business.categories.split(",");
          return categoriesArray.some((category) =>
            category.trim().includes(searchInput)
          );
        });
        setBusinesses(filteredData);
      })
      .catch((error) => console.error(error));
  }, [searchInput]);

  return (
    <>
      <p>{data.category}</p>
      <div className="main-page">
        <HomeIcon />
        <hr></hr>
        <div className="nav-container">
          <Navigation page={"business-page"} />
        </div>
        <div className="map-container">
          <GoogleMap businesses={businesses.slice(0, 10)} />
        </div>
        <h1 className="business-header">Browsing Stata Barbara, CA business</h1>
        <BusinessList businesses={businesses} />
      </div>
    </>
  );
}

export default BusinessIndexPage;
