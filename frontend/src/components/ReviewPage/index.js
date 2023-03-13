import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import { createReview, editReview } from "../../store/review";
import "./ReviewPage.css";

const ReviewForm = ({ review }) => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState(review ? review.content : "");
  const [rating, setRating] = useState(review ? review.rating : 0);

  useEffect(() => {
    setContent(review ? review.content : "");
    setRating(review ? review.rating : 0);
  }, [review]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      content,
      rating,
      business_id: businessId,
      author_id: currentUser.id,
      author_name: `${currentUser.fname} ${currentUser.lname}`,
    };
    if (review) {
      reviewData.id = review.id;
      dispatch(editReview(reviewData));
    } else {
      dispatch(createReview(reviewData));
    }
    setContent("");
    setRating(0);
  };

  return (
    <>
      <h1>{businessId}</h1>
      <div className="white-text-div"></div>
      <div className="form-page-container">
        <Navigation />
        <div className="business-background-color"></div>
        <HomeIcon />
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <textarea
                rows="30"
                cols="100"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
            <label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </label>
            <button className="review-submit-button" type="submit">
              {review ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
