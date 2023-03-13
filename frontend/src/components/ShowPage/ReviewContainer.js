import React, { useState, useEffect } from "react";
import Dropdown from "./DropDown";
import { reviewStarSmall } from "../../utils";
import { removeReview } from "../../store/review";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ReviewContainer({ showReview }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEditReview = (review) => {
    history.push(`/reviews/${review.id}/edit`);
  };

  const handleRemoveReview = (reviewId) => {
    dispatch(removeReview(reviewId));
    window.location.reload();
  };

  return (
    <div className="reviews-form-container">
      {Array.isArray(showReview) && showReview.length > 0 ? (
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
              <div className="author-name">{review.authorName}</div>
              <div className="review-created-date">
                {review.createdAt.substring(0, 10)}
              </div>
              <div className="business-review-container">
                <img
                  className="bussiness-review"
                  style={{
                    translate: `0% ${reviewStarSmall(review.rating)}`,
                  }}
                  src="https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-59bbc2cf8e3d4be04fcc.png"
                  alt=""
                />
              </div>
              <div className="review-contents">{review.content}</div>
            </div>
          );
        })
      ) : (
        <p>no reviews found</p>
      )}
    </div>
  );
}

export default ReviewContainer;
