import React, { useEffect, use, useState } from "react";
import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import HomeIcon from "../HomePageIcon";

function BusinessIndexPage() {
  return (
    <>
      {/* <GoogleMap />  */}
      <div className="main-page">
        <HomeIcon />
        <Navigation />
        <h1>BUSINESS INDEX PAGE</h1>
      </div>
    </>
  );
}

export default BusinessIndexPage;
