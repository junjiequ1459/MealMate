import React, { useState, useEffect } from "react";
import BusinessHeader from "./BusinessHeader";
import TempImage from "../../assets/tempimage.png";

function BusinessImageHeader({ showData }) {
  const [imageUrls, setImageUrls] = useState([]);

  function handleImageError(event) {
    event.preventDefault();
    event.target.src = TempImage;
  }

  return showData.business_id ? (
    <div className="show-page-container">
      {/* {console.log(showData.business_id)} */}
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
  ) : null;
}

export default BusinessImageHeader;
