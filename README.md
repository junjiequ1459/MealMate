# fullstackProject
Yelp clone 
Hi! Welcome to MealMate, my own clone of Yelp.

I created MealMate using React for the frontend and Ruby on Rails for the backend. Within the app, the user can search search for various resturants and filter them based on price. Users can then leave reviews for the resturants. 


## Technologies & Libaries Used

    React
    Redux
    AWS S3
    Javascript
    Ruby on Rails
    PostgreSQL
    JSON / Jbuilder
    HTML
    CSS
    Render
    Font Awesome
    Webpack


### Sample Action and Reducer Using React-Redux

```import csrfFetch from "./csrf.js";

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


```


## Future Implementations 
    Users can Like and favorite Resturants
    Users can upload images with reviews
    User can upload photos for their profile