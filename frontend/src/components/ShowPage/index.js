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
    window.scrollTo(0, 0);
    console.log("hi");
    fetch(`/api/businesses/${businessId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setshowData(data);
      });
  }, []);

  function priceRange(input) {
    let result = "";
    for (let i = 0; i < input; i++) {
      result += "$";
    }
    return result;
  }
  function timeTillClose(input) {
    const [startTime, endTime] = input.hours.Friday.split("-");

    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);

    const startTime24 =
      startHour >= 12 ? `${startHour}:00 PM` : `${startHour}:00 AM`;
    const endTime24 =
      endHour >= 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;

    return endTime24;
  }

  return (
    <>
      <div className="show-page-container">
        <Navigation />
        <HomeIcon />
        {console.log(showData)}
        <div className="show-page-header">
          <p className="show-page-name">{showData.name}</p>
          <p>
            Claimed &#x2022;{" "}
            {/* {priceRange(showData.properties.RestaurantsPriceRange2)} &#x2022;{" "}
            {showData.categories}{" "}
            {showData.hours.Friday && timeTillClose(showData)
              ? timeTillClose(showData)
              : "12:00 AM"} */}
          </p>
        </div>
        <div className="show-image-container"></div>
      </div>
    </>
  );
};

export default ShowPage;
