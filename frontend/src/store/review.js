import csrfFetch from "./csrf.js";

export const ADD_REVIEW = "review/addReview";

const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

export const createReview = (review) => async (dispatch) => {
  const { content, rating, business_id, author_id } = review;
  const response = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify({
      content,
      rating,
      business_id,
      author_id,
    }),
  });

  const data = await response.json();
  dispatch(addReview(data));
  return response;
};

const reviewReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ADD_REVIEW:
      const review = action.payload;
      return { ...state, reviews: [...state, review] };
    default:
      return state;
  }
};

export default reviewReducer;
