export const isLogged = () => {
  return localStorage.getItem("id") ? true : false;
};
