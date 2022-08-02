export const USER_NAME = () => {
  const userName = localStorage.getItem("userName");

  return userName;
};
export const TOKEN = () => {
  const tokenID = localStorage.getItem("token");

  return tokenID;
};

