import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEvents } from "../utils/api";
import axios from "axios";

export const useUserMutations = () => {
  const queryClient = useQueryClient();
  const editUserProfile = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
  return { editUserProfile };
};
export const useEventMutations = () => {
  const queryClient = useQueryClient();

  const createEvent = useMutation({
    mutationFn: createEvents,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event"],
      });
    },
  });

  return { createEvent };
};

export const useTeamMutations = (id) => {
  const queryClient = useQueryClient();

  const addProject = useMutation({
    mutationFn: async (payload) => {
      await axios.post(`/api/projects`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["team", id],
      });
    },
  });

  const editProject = useMutation({
    mutationFn: async (payload) => {
      await axios.put(`/api/projects/${payload.id}`, {
        offset: payload.offset,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["team", id],
      });
    },
  });

  return { addProject, editProject };
};
