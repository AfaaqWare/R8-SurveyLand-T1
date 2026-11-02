import { useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { ApiErrorResponse } from "@/shared/types/api-error-response";
import { addQuestion } from "../api/addQuestion";
import type { AddQuestionBody, AddQuestionResponse } from "../types/PreviewType";

const useAddQuestion = (id: string) => {
  const t = useTranslations("UserDashboard.addQuestion");
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useApiMutation<AddQuestionBody, AddQuestionResponse>({
    mutationFn: body => addQuestion(id, body),
    options: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["questions", id],
        });

        await showAlert("success", t("saved"));
      },
      onError: error => {
        const message = isAxiosError<ApiErrorResponse>(error)
          ? error.response?.data?.message
          : error.message;

        showAlert("error", message || t("somethingWrong"));
      },
    },
  });

  return { mutate, isSaving: isPending };
};

export default useAddQuestion;
