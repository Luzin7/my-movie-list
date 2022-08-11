export const USER_NAME = () => {
  const userName = localStorage.getItem("userName");

  return JSON.parse(userName);
};
export const TOKEN = () => {
  const tokenID = localStorage.getItem("token");

  return tokenID;
};

