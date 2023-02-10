import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useEffect } from "react";
import HomeIcon from "../HomePageIcon";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinesses } from "./businessAction";

function BusinessIndexPage() {
  const location = useLocation();
  const data = location.state.data;
  const dispatch = useDispatch();
  const businesses = useSelector((state) => state.businesses);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchBusinesses());
  }, [dispatch]);

  if (!businesses) {
    return <div>Loading...</div>;
  }
  
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
      </div>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>{business.name}</li>
        ))}
      </ul>
    </>
  );
}

export default BusinessIndexPage;
