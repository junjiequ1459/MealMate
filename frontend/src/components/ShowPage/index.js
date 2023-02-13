import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import "./ShowPage.css";

const ShowPage = () => {
  const { businessId } = useParams();
  const [showData, setshowData] = useState({});

  useEffect(() => {
    fetch(`/api/businesses/${businessId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setshowData(data);
      });
  });

  return (
    <>
      <div className="show-page-container">
        <Navigation />
        <HomeIcon />
        <p>{showData.name}</p>

        <div className="show-image-container"></div>
      </div>
    </>
  );
};

export default ShowPage;
