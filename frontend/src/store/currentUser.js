export const fetchCurrentUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/api/users/current");
      const user = await response.json();
      dispatch({ type: "SET_CURRENT_USER", payload: user }); // update the Redux store with the current user's information
    } catch (error) {}
  };
};

// create a reducer to handle the current user's information in the store
const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};
