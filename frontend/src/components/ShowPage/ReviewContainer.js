import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import { reviewStar } from "../../utils";
import { editReview, removeReview } from "../../store/review";
import { useDispatch } from "react-redux";

function ReviewConainer({ showReview }) {
  const dispatch = useDispatch();

  const handleEditReview = (review) => {
    dispatch(editReview(review));
  };

  const handleRemoveReview = (reviewId) => {
    dispatch(removeReview(reviewId));
  };

  return (
    <div className="reviews-form-container">
      {showReview &&
        showReview.map((review) => {
          return (
            <div className="show-user-review-container" key={review.id}>
              <div className="dropdown-container">
                <Dropdown
                  options={["Edit review", "Remove review"]}
                  onOptionSelected={(option) =>
                    option === "Edit review"
                      ? handleEditReview(review)
                      : handleRemoveReview(review.id)
                  }
                />
              </div>
              <div className="author-name">{review.author_name}</div>
              <div className="show-review-container">
                <img
                  className="bussiness-review"
                  style={{
                    translate: `0% ${reviewStar(review.rating)}`,
                  }}
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
                  alt=""
                />
              </div>
              <p>{review.content}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ReviewConainer;
