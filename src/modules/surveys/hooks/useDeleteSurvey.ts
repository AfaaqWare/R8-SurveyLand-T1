"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { deleteSurvey } from "../api/deleteSurvey";

const useDeleteSurvey = () => {
  const queryClient = useQueryClient();

  return useApiMutation<string, void>({
    mutationFn: deleteSurvey,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["survey", "list"] });
      },
    },
  });
};

export default useDeleteSurvey;
