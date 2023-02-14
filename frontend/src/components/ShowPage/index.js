import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import TempImage from "../../assets/tempimage.png"

import "./ShowPage.css";

const ShowPage = () => {
  const { businessId } = useParams();
  const [showData, setShowData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/businesses/${businessId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("THIS IS THE DATA");
        console.log(data);
        console.log(showData);
        console.log(showData.properties);
        setShowData(data);
      });
  }, []);

  function reviewStar(input) {
    switch (input) {
      case 1:
        return "-9.4%";
      case 1.5:
        return "-4.7%";
      case 2:
        return "-18.8%";
      case 2.5:
        return "-14.1%";
      case 3:
        return "-28.3%";
      case 3.5:
        return "-23.6%";
      case 4:
        return "-37.6%";
      case 4.5:
        return "-32.9%";
      case 5:
      default:
        return "0%";
    }
  }

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
  function handleImageError(event) {
    event.target.src = TempImage;
  }


  return (
    <>
      <div className="show-page-container">
        <img className="show-image" src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`} onError={handleImageError} alt="img"></img>
        <img className="show-image" src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`} onError={handleImageError} alt="img"></img>
        <img className="show-image" src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`} onError={handleImageError} alt="img"></img>
      </div>
      <div className="dark-image-header"></div>
      <Navigation />
      <div className="business-background-color">
      </div>
      <HomeIcon />
      <div className="show-page-header">
        <h1 className="show-page-name">{showData.name}</h1>
        <div className="show-review-container">
          <img
            className="business-review"
            style={{
              translate: `0% ${reviewStar(showData.stars)}`,
            }}
            src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
          ></img>
        </div>
        <p style={{ color: "white" }}>
          Claimed &#x2022;{" "}
          {showData.properties &&
            priceRange(showData.properties.RestaurantsPriceRange2)}{" "}
          &#x2022; {showData.categories}{" "}
          <span style={{ color: "darkgreen" }}>Open </span>
          {showData.hours && timeTillClose(showData)
            ? timeTillClose(showData)
            : "12:00 AM"}
        </p>
      </div>
      <div className="show-image-container"></div>
      <div className="show-body-container">
        <div className="properties-info-container">
          <div className="amenities">
            <h2>Amenities and more</h2>
            <ul className="amenities-list">
              <li>{(showData.properties && showData.properties.RestaurantsTakeOut === "True"
              ) ? "\u2713" : "\u2715"} TakeOut </li>
              <li>{(showData.properties && showData.properties.BusinessAcceptsCreditCards === "True"
              ) ? "\u2713" : "\u2715"} Accepts Credit Cards</li>
              <li>{(showData.properties && showData.properties.RestaurantsReservations === "True"
              ) ? "\u2713" : "\u2715"} Reservations</li>
              <li>{(showData.properties && showData.properties.RestaurantsTableService === "True"
              ) ? "\u2713" : "\u2715"} TableService</li>
              <li>{(showData.properties && showData.properties.GoodForKids === "True"
              ) ? "\u2713" : "\u2715"} Good For Kids</li>
              <li>{(showData.properties && showData.properties.WheelchairAccessible === "True"
              ) ? "\u2713" : "\u2715"} Wheelchair Accessible</li>
              <li>{(showData.properties && showData.properties.OutdoorSeating === "True"
              ) ? "\u2713" : "\u2715"} Outdoor Seating</li>
              <li>{(showData.properties && showData.properties.RestaurantsDelivery === "True"
              ) ? "\u2713" : "\u2715"} Delivery</li>
              <li>{(showData.properties && showData.properties.HasTV === "True"
              ) ? "\u2713" : "\u2715"} HasTV</li>
              <li>{(showData.properties && showData.properties.DogsAllowed === "True"
              ) ? "\u2713" : "\u2715"} Dogs Allowed</li>
              <li>{(showData.properties && showData.properties.Caters === "True"
              ) ? "\u2713" : "\u2715"} Caters</li>
              <li>{(showData.properties && showData.properties.RestaurantsGoodForGroups === "True"
              ) ? "\u2713" : "\u2715"} Good For Groups</li>
              <li>{(showData.properties && showData.properties.HappyHour === "True"
              ) ? "\u2713" : "\u2715"} Happy Hour</li>
              <li>{(showData.properties && showData.properties.BikeParking === "True"
              ) ? "\u2713" : "\u2715"} Bike Parking</li>
              <li>{(showData.properties && showData.properties.BusinessAcceptsBitcoin === "True"
              ) ? "\u2713" : "\u2715"} Accepts Bitcoin</li>
              <li>{(showData.properties && showData.properties.Wifi)}Wifi</li>

            </ul>
          </div>

        </div>

        <div className="direction-container">
          <h2 className="directions-style">Get Directions</h2>
          <div>
            {showData.address}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPage;
