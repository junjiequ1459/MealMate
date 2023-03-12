import React from "react";
import "./ShowPage.css";

function Amenities({ showData }) {
  return (
    <div>
      <div className="amenities">
        <h2>Amenities and more</h2>
        <ul className="amenities-list">
          <li>
            {showData.properties &&
            showData.properties.RestaurantsTakeOut === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            TakeOut{" "}
          </li>
          <li>
            {showData.properties &&
            showData.properties.BusinessAcceptsCreditCards === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Accepts Credit Cards
          </li>
          <li>
            {showData.properties &&
            showData.properties.RestaurantsReservations === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Reservations
          </li>
          <li>
            {showData.properties &&
            showData.properties.RestaurantsTableService === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            TableService
          </li>
          <li>
            {showData.properties && showData.properties.GoodForKids === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Good For Kids
          </li>
          <li>
            {showData.properties &&
            showData.properties.WheelchairAccessible === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Wheelchair Accessible
          </li>
          <li>
            {showData.properties &&
            showData.properties.OutdoorSeating === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Outdoor Seating
          </li>
          <li>
            {showData.properties &&
            showData.properties.RestaurantsDelivery === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Delivery
          </li>
        </ul>
      </div>
      <div className="amenities2-container">
        <ul className="amenities-list2">
          <li>
            {showData.properties && showData.properties.HasTV === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            HasTV
          </li>
          <li>
            {showData.properties && showData.properties.DogsAllowed === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Dogs Allowed
          </li>
          <li>
            {showData.properties && showData.properties.Caters === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Caters
          </li>
          <li>
            {showData.properties &&
            showData.properties.RestaurantsGoodForGroups === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Good For Groups
          </li>
          <li>
            {showData.properties && showData.properties.HappyHour === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Happy Hour
          </li>
          <li>
            {showData.properties && showData.properties.BikeParking === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Bike Parking
          </li>
          <li>
            {showData.properties &&
            showData.properties.BusinessAcceptsBitcoin === "True"
              ? "\u2713"
              : "\u2715"}{" "}
            Accepts Bitcoin
          </li>
          <li>
            {showData.properties &&
            showData.properties.WiFi &&
            showData.properties.WiFi.includes("no")
              ? "\u2715"
              : "\u2713"}{" "}
            Wifi{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Amenities;
