"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { updateQuestion } from "../api/updateQuestion";
import type { UpdateQuestionParams, UpdateQuestionResponse } from "../types/QuestionTypes";

const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  return useApiMutation<UpdateQuestionParams, UpdateQuestionResponse>({
    mutationFn: updateQuestion,
    options: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["questions"] });
      },
    },
  });
};

export default useUpdateQuestion;