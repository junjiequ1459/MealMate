import React from "react";
import BusinessHeader from "./BusinessHeader";
import TempImage from "../../assets/tempimage.png";

function BusinessImageHeader({ showData }) {
  function handleImageError(event) {
    event.target.src = TempImage;
  }

  return (
    <div className="show-page-container">
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
      <img
        className="show-image"
        src={`https://meal-mate-seeds.s3.amazonaws.com/testfolder/${showData.business_id}_photos/1.jpg`}
        onError={handleImageError}
        alt="img"
      ></img>
      <BusinessHeader showData={showData} />
    </div>
  );
}

export default BusinessImageHeader;
