const { default: axios } = require("axios");

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/me");
  return data;
};

export const getEventsData = async () => {
  const { data } = await axios.get("/api/events");
  return data;
};
