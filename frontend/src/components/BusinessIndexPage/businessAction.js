export const fetchBusinesses = () => async (dispatch) => {
  const response = await fetch("/api/businesses");
  const data = await response.json();

  dispatch({
    type: "FETCH_BUSINESSES",
    payload: data,
  });
};
