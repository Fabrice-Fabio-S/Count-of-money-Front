export const isLogged = () => {
  return localStorage.getItem("id") || localStorage.getItem("googleId")
    ? true
    : false;
};
