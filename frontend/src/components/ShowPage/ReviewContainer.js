import React from "react";
import Dropdown from "./DropDown";
import { reviewStar } from "../../utils";
import { useState } from "react";

function ReviewConainer({ showReview }) {
  return (
    <div className="reviews-form-container">
      {showReview &&
        showReview.map((review) => {
          return (
            <div className="show-user-review-container">
              <p>{review.author_id}</p>
              <Dropdown options={["Edit", "Delete"]} />
              <div className="show-review-container">
                <img
                  className="bussiness-review"
                  style={{
                    translate: `0% ${reviewStar(review.rating)}`,
                  }}
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
                  alt=""
                ></img>
              </div>
              <p key={review.id}>{review.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ReviewConainer;
