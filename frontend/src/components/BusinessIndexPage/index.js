import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useEffect } from "react";
import HomeIcon from "../HomePageIcon";
import { useLocation } from "react-router-dom";
import BusinessList from "../Business";

function BusinessIndexPage() {
  const location = useLocation();
  const data = location.state.data;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <p>{data.category}</p>
      <div className="main-page">
        <HomeIcon />
        <div className="nav-container">
          <Navigation page={"business-page"} />
        </div>
        <div className="map-container">
          <GoogleMap />
        </div>
        <BusinessList />
      </div>
    </>
  );
}

export default BusinessIndexPage;
