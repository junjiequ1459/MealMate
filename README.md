# MealMate

Hi! Welcome to MealMate, my own clone of Yelp.

To bring MealMate to life, I utilized React for the frontend and Ruby on Rails for the backend. With this application, users have the ability to browse for restaurants, filter them according to price, and even post their own reviews of their dining experiences.

![Alt Text](https://meal-mate-seeds.s3.amazonaws.com/mealmate-splash.png)


# Technologies & Libaries Used

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
    
    
# Setup

in the root directory run ```bundle install```
```db:create```
```rails:migrate```
```rails:seed```
```rails s```

cd into the front end directory and run ```npm install```
then finally run ```npm start```

# Sample Action and Reducer Using React-Redux

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


# Future Implementations 
    Users can Like and favorite Resturants
    Users can upload images with reviews
    User can upload photos for their profile
