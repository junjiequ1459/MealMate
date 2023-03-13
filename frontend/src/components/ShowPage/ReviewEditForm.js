import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editReview } from "../../store/review";

function ReviewEditForm({ location }) {
  const { review } = location.state;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    rating: review.rating,
    content: review.content,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editReview({ ...review, ...formData }));
  };

  return (
    <div className="edit-review-form-container">
      <h2>Edit Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ReviewEditForm;
