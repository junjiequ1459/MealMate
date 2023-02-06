export const csrfFetch = async (url, options = {}) => {
  options.method ||= "GET";
  options.headers ||= {};

  // will need to modify this when using formData to attach resources like photos
  // can't have a Content-Type header
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] = "application/json";
    options.headers["X-CSRF-Token"] = sessionStorage.getItem("X-CSRF-Token");
  }

  const res = await fetch(url, options);
  return res;
};

export const restoreSession = async () => {
  let res = await fetch("/api/session");
  let token = res.headers.get("X-CSRF-Token");
  sessionStorage.setItem("X-CSRF-Token", token);
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));
};

// export const postTea = (tea) => {
//   return csrfFetch("api/teas", {
//     method: "POST",
//     body: JSON.stringify(tea),
//     // remove any set headers as the csrfFetch will add them
//   });
// };

export default csrfFetch;
