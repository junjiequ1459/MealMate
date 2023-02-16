import csrfFetch from "./csrf.js";

export const ADD_REVIEW = 'review/addReview';


const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review,
});

export const createReview = (review) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
    const data = await response.json();
    dispatch(addReview(data));
}


const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_REVIEW:
            const review = action.payload;
            return { ...state, reviews: [...state, review] };
        default:
            return state;
    }
};





export default reviewReducer