import React from "react";
import "./ShowPage.css";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import Amenities from "./AmenetiesAndMore";
import BusinessHours from "./BusinessHours";
import ReviewConainer from "./ReviewContainer";
import BusinessImageHeader from "./BusinessImageHeader";
import { useSelector } from "react-redux";

const ShowPage = () => {
  const history = useHistory();
  const currentUser = useSelector((state) => state.session.user);
  const { businessId } = useParams();
  const [showData, setShowData] = useState({});
  const [showReview, setShowReview] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`/api/businesses/${businessId}`)
      .then((response) => response.json())
      .then((businessData) => {
        setShowData(businessData);
      })
      .catch((error) => console.error(error));
  }, [businessId]);

  useEffect(() => {
    fetch(`/api/reviews/`)
      .then((response) => response.json())
      .then((reviewData) => {
        const filteredData = reviewData.filter(
          (review) => review.businessId === showData.id
        );
        setShowReview(filteredData);
      })
      .catch((error) => console.error(error));
  }, [showData]);

  const center = showData.latitude
    ? `${showData.latitude.toString()},${showData.longitude.toString()}`
    : "";
  const mapUrl = center
    ? `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=18&size=400x200&markers=color:red%7C${center}&key=AIzaSyCpVTq-kHDX_XHZWQpfaHQ4dQmHNDu7ptU`
    : "";

  const handleReviewClick = () => {
    if (currentUser) {
      history.push({
        pathname: `/reviews/${showData.id}`,
        state: { showData, showReview },
      });
    } else {
      history.push({
        pathname: `/login/`,
      });
    }
  };
  return (
    <>
      <div className="show-page-and-body-container">
        <BusinessImageHeader showData={showData} />
        <Navigation />
        <div className="business-background-color"></div>
        <HomeIcon />
        <h1 className="location-and-hours-title">Location & Hours</h1>
        <div className="review-button-container">
          <button className="show-button-review" onClick={handleReviewClick}>
            Write a review
          </button>
        </div>
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
          <div className="direction-container">
            <h2 className="directions-style" style={{ marginLeft: "20px" }}>
              Get Directions
            </h2>
            <div className="direction-address">{showData.address}</div>
          </div>
        </div>

        <div className="properties-info-container">
          <Amenities showData={showData} />
        </div>
        <ReviewConainer showReview={showReview} />
      </div>
    </>
  );
};

export default ShowPage;
