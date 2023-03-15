import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../Navigation";
import HomeIcon from "../HomePageIcon";
import { createReview, editReview } from "../../store/review";
import { useHistory, useLocation } from "react-router-dom";

import "./ReviewPage.css";
import ReviewContainer from "../ShowPage/ReviewContainer";

const ReviewForm = ({ review }) => {
  const { businessId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const currentUser = useSelector((state) => state.session.user);
  const [content, setContent] = useState(review ? review.content : "");
  const [rating, setRating] = useState(review ? review.rating : 0);
  const showData = location.state.showData;
  const showReview = location.state.showReview;
  const redirectUrl = `/business/${showData.business_id}`;

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
      author_name: `${
        currentUser.fname.charAt(0).toUpperCase() + currentUser.fname.slice(1)
      } ${currentUser.lname[0].toUpperCase()}.`,
    };
    const existingReview = showReview.find(
      (review) => review.authorId === currentUser.id
    );
    if (existingReview) {
      alert("You have already submitted a review for this business.");
    } else {
      if (review) {
        reviewData.id = review.id;
        dispatch(editReview(reviewData));
      } else {
        dispatch(createReview(reviewData));
      }
      setContent("");
      setRating(0);
      history.push(redirectUrl);
    }
  };

  return (
    <>
      {/* <div className="white-text-div"></div> */}
      <div className="form-page-container">
        <Navigation />
        <div className="business-background-color"></div>
        <HomeIcon />
        <div className="form-container-flex">
          <div className="form-container">
            <div className="business-review-name">
              {showData.name} - {showData.city}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex-form-container">
                <label>
                  <textarea
                    rows="25"
                    cols="80"
                    placeholder="Doesn’t look like much when you walk past, but I was practically dying of hunger so I popped in. The definition of a hole-in-the-wall. I got the regular hamburger and wow…  there are no words. A classic burger done right. Crisp bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce, tomato, and pickles). There’s about a million options available between the menu board and wall full of specials, so it can get a little overwhelming, but you really can’t go wrong. Not much else to say besides go see for yourself! You won’t be disappointed."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
                <div>
                  <label>
                    <input
                      className="rating-star-input"
                      type="number"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    />
                  </label>
                  <button className="review-submit-button" type="submit">
                    {"Submit"}
                  </button>
                </div>
              </div>
            </form>
            <div className="recent-reviews">
              <h2 className="recent-reviews-header">Recent Reviews</h2>
              <ReviewContainer showReview={showReview} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
