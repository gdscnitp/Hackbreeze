import { useQuery } from "@tanstack/react-query";
import { getEventsData, getUserData } from "../utils/api";

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
