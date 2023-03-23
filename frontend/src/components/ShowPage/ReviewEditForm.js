import React, { useState } from "react";

function EditReview({ review, onSave }) {
  const [rating, setRating] = useState(review.rating);
  const [content, setContent] = useState(review.content);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ id: review.id, rating, content });
  };

  return (
    <form className="edit-form"onSubmit={handleSubmit}>
      <label>
        Rating:
        <select value={rating} onChange={handleRatingChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <label>
        <textarea value={content} onChange={handleContentChange} />
      </label>
      <br />
      <button className="edit-save-button" type="submit">
        Save
      </button>
    </form>
  );
}

export default EditReview;
