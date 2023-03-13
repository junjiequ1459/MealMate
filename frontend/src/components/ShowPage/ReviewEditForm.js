import React, { useState } from "react";

function ReviewEditForm({ review, onSubmit }) {
  const [authorName, setAuthorName] = useState(review.authorName);
  const [rating, setRating] = useState(review.rating);
  const [content, setContent] = useState(review.content);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      id: review.id,
      authorName,
      rating,
      content,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author Name:
        <input
          type="text"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(parseInt(event.target.value))}
        />
      </label>
      <label>
        Content:
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default ReviewEditForm;
