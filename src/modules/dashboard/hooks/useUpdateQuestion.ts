
"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";

import { updateQuestion } from "../api/updateQuestion";
import type {
  UpdateQuestionParams,
  UpdateQuestionResponse,
} from "../types/QuestionTypes";

const getErrorMessage = (error: unknown): string => {
  if (typeof error === "object" && error !== null) {
    const err = error as {
      response?: {
        data?: {
          message?: string;
        };
      };
      message?: string;
    };

    return (
      err.response?.data?.message ||
      err.message ||
      "Something went wrong. Please try again."
    );
  }

  return "Something went wrong. Please try again.";
};

const useUpdateQuestion = () => {
  const queryClient = useQueryClient();
  const { showAlert } = useAlert();

  return useApiMutation<UpdateQuestionParams, UpdateQuestionResponse>({
    mutationFn: updateQuestion,
    options: {
      onSuccess: async (response) => {
        await queryClient.invalidateQueries({
          queryKey: ["questions"],
        });

        await showAlert(
          "success",
          response.message || "Question updated successfully"
        );
      },

      onError: (error) => {
        void showAlert("error", getErrorMessage(error));
      },
    },
  });
};

export default useUpdateQuestion;
