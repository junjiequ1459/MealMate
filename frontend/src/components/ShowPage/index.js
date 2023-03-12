import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import TempImage from "../../assets/tempimage.png";
import Amenities from "./AmenetiesAndMore";
import { reviewStar } from "../../utils";

import "./ShowPage.css";
import BusinessHours from "./BusinessHours";
import BusinessHeader from "./BusinessHeader";
import ReviewConainer from "./ReviewContainer";

const ShowPage = () => {
  const { businessId } = useParams();
  const [showData, setShowData] = useState({});
  const [showReview, setShowReview] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/businesses/${businessId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowData(data);
      });
  }, [businessId]);

  useEffect(() => {
    fetch(`/api/reviews/${showData && showData.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setShowReview(data);
        console.log(data);
      });
  }, [showData]);

  function handleImageError(event) {
    event.target.src = TempImage;
  }

  const center = showData.latitude
    ? `${showData.latitude.toString()},${showData.longitude.toString()}`
    : "";
  const mapUrl = center
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=18&size=400x200&markers=color:red%7C${center}&key=AIzaSyCpVTq-kHDX_XHZWQpfaHQ4dQmHNDu7ptU`
    : "";

  const handleReviewClick = () => {
    window.location.href = `/reviews/${showData.id}`;
  };

  return (
    <>
      <div className="show-page-and-body-container">
        <div className="show-page-container">
          <img
            class="show-image"
            src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`}
            onError={handleImageError}
            alt="img"
          ></img>
          <img
            className="show-image"
            src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`}
            onError={handleImageError}
            alt="img"
          ></img>
          <img
            className="show-image"
            src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`}
            onError={handleImageError}
            alt="img"
          ></img>
          <BusinessHeader showData={showData} />
        </div>
        <div className="dark-image-header"></div>
        <Navigation />
        <div className="business-background-color"></div>
        <HomeIcon />
        <h1 className="location-and-hours-title">Location & Hours</h1>
        <div className="show-image-container"></div>

        <div className="show-body-container">
          <div className="show-googlemaps">
            <img src={mapUrl} alt=""></img>
          </div>
          <div className="google-map-address">
            <span className="directions-style">{showData.address}</span>
            <br></br>
            {showData.city} {showData.state} {showData.postal_code}
          </div>
          <BusinessHours showData={showData} />
          <div className="properties-info-container">
            <Amenities showData={showData} />
          </div>
          <div className="direction-container">
            <h2 className="directions-style" style={{ marginLeft: "20px" }}>
              Get Directions
            </h2>
            <div className="direction-address">{showData.address}</div>
          </div>
        </div>
        <ReviewConainer showReview={showReview} />
        <div className="review-button-container">
          <button className="show-button-review" onClick={handleReviewClick}>
            Write a review
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowPage;
