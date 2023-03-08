import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import { createReview } from "../../store/review";
import "./ReviewPage.css";

const ReviewForm = () => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user); // get the current user from the store
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      content,
      rating,
      business_id: businessId,
      author_id: currentUser.id,
    };
    dispatch(createReview(review));
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
