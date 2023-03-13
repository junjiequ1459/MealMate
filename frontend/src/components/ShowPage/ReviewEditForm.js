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
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input type="number" value={rating} onChange={handleRatingChange} />
      </label>
      <br />
      <label>
        Content:
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
