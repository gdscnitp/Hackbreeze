import { useMutation, useQueryClient } from "@tanstack/react-query";

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
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["event"],
      });
    },
  });

  return { createEvent };
};
