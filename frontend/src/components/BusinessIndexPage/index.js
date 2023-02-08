import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useEffect, useRef, useState } from "react";
import HomeIcon from "../HomePageIcon";

function BusinessIndexPage() {
  return (
    <>
      <div className="main-page">
        <HomeIcon />
        <div className="nav-container">
          <Navigation page={"business-page"} />
        </div>
        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    </>
  );
}

export default BusinessIndexPage;
