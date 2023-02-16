import csrfFetch from "./csrf.js";

export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const UPDATE_REVIEW_SUCCESS = 'UPDATE_REVIEW_SUCCESS';
export const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';

const createReviewSuccess = (data) => ({
    type: CREATE_REVIEW_SUCCESS,
    payload: data,
});

const fetchReviewsSuccess = (data) => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
});

const updateReviewSuccess = (data) => ({
    type: UPDATE_REVIEW_SUCCESS,
    payload: data,
});

const deleteReviewSuccess = (data) => ({
    type: DELETE_REVIEW_SUCCESS,
    payload: data,
});

export const createReview = (review) => {
    return async (dispatch) => {
        try {
            const response = await csrfFetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ review })
            });
            const data = await response.json();
            dispatch(createReviewSuccess(data));
            return data;

        } catch (error) {
            console.error('Error creating review:', error);
        }
    };
};


export const fetchReviews = () => {
    return (dispatch) => {
        fetch('/api/reviews')
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchReviewsSuccess(data));
            })
            .catch((error) => {
                console.error('Error fetching reviews:', error);
            });
    };
};

export const updateReview = (review) => {
    return (dispatch) => {
        fetch(`/api/reviews/${review.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(updateReviewSuccess(data));
            })
            .catch((error) => {
                console.error('Error updating review:', error);
            });
    };
};

export const deleteReview = (review) => {
    return (dispatch) => {
        fetch(`/api/reviews/${review.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(deleteReviewSuccess(data));
            })
            .catch((error) => {
                console.error('Error deleting review:', error);
            });
    };
};


const initialState = {
    reviews: []
};


const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: [...state.reviews, action.payload],
            };
        case FETCH_REVIEWS_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
            };
        case UPDATE_REVIEW_SUCCESS:
            const updatedReview = action.payload;
            const updatedReviews = state.reviews.map(review => {
                if (review.id === updatedReview.id) {
                    return updatedReview;
                } else {
                    return review;
                }
            });
            return {
                ...state,
                reviews: updatedReviews,
            };
        case DELETE_REVIEW_SUCCESS:
            const deletedReview = action.payload;
            const remainingReviews = state.reviews.filter(review => review.id !== deletedReview.id);
            return {
                ...state,
                reviews: remainingReviews,
            };
        default:
            return state;
    }
};



export default reviewReducer