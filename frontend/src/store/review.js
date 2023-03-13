import csrfFetch from "./csrf.js";

export const ADD_REVIEW = "review/addReview";
export const UPDATE_REVIEW = "review/updateReview";
export const DELETE_REVIEW = "review/deleteReview";

const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});
const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  payload: reviewId,
});

export const createReview = (review) => async (dispatch) => {
  const { content, rating, business_id, author_id, author_name } = review;
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify({
      content,
      rating,
      business_id,
      author_id,
      author_name,
    }),
  });

  const data = await response.json();
  dispatch(addReview(data));
  return response;
};

export const editReview = (review) => async (dispatch) => {
  const { id, content, rating } = review;
  const response = await csrfFetch(`/api/reviews/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ content, rating }),
  });

  const data = await response.json();
  dispatch(updateReview(data));
  return response;
};

export const removeReview = (reviewId) => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE",
  });

  dispatch(deleteReview(reviewId));
  return response;
};

const reviewReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_REVIEW:
      const review = action.payload;
      return { ...state, reviews: [...state.reviews, review] };
    case UPDATE_REVIEW:
      const updatedReview = action.payload;
      const updatedReviews = state.reviews.map((review) =>
        review.id === updatedReview.id ? updatedReview : review
      );
      return { ...state, reviews: updatedReviews };
    case DELETE_REVIEW:
      const deletedReviewId = action.payload;
      const filteredReviews = state.reviews.filter(
        (review) => review.id !== deletedReviewId
      );
      return { ...state, reviews: filteredReviews };
    default:
      return state;
  }
};

export default reviewReducer;
