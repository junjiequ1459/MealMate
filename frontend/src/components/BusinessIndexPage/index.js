import React, { useEffect, use, useState } from "react";
import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";

function BusinessIndexPage() {
  return (
    <>
      {/* <GoogleMap />  */}
      <div className="main-page">
        <Navigation />
        <h1>BUSINESS INDEX PAGE</h1>
      </div>
    </>
  );
}

export default BusinessIndexPage;
