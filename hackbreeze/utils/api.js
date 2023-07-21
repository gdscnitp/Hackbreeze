import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};

export const getEventsData = async () => {
  const { data } = await axios.get("/api/events");
  return data;
};
export const getEventData = async (id) => {
  const { data } = await axios.get(`/api/events/${id}`);
  return data;
};

export const createEvents = async (payload) => {
  await axios.post("/api/events", payload);
};

export const getTeam = async (id) => {
  const { data } = await axios.get(`/api/team/${id}`);
  return data;
};
