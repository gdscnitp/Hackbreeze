import { useQuery } from "@tanstack/react-query";
import {
  getEventData,
  getEventsData,
  getTeam,
  getUserData,
} from "../utils/api";
import axios from "axios";

export const useUser = () => {
  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
  });

  return { data, error, isError, isLoading, isFetched };
};

export const useEvents = () => {
  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ["event"],
    queryFn: getEventsData,
  });

  return { data, error, isError, isLoading, isFetched };
};

export const useEvent = (id) => {
  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ["event", id],
    queryFn: () => getEventData(id),
  });

  return { data, error, isError, isLoading, isFetched };
};

export const useTeam = (id) => {
  const { data, error, isError, isLoading, isFetched } = useQuery({
    enabled: id !== null || id !== undefined,
    queryKey: ["team", id],
    queryFn: () => getTeam(id),
  });

  return { data, error, isError, isLoading, isFetched };
};

export const useFriends = () => {
  const { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ["friend"],
    queryFn: async () => {
      const { data } = await axios.post("/api/friends", {
        uid: process.env.NEXT_PUBLIC_DUMMY_USER_ID,
      });
      return data;
    },
  });

  return { data, error, isError, isLoading, isFetched };
};

export const useTeams = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await axios.get("/api/team/findall");
      return data;
    },
  });
  return { teams: data, error, isLoading, isError };
};
