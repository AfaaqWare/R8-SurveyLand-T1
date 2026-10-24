import { useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { ApiErrorResponse } from "@/shared/types/api-error-response";
import { UpdateSurvey } from "../api/UpdateSurvey";
import type { SurveyResponse, UpdateSurveyProps } from "../types/UpdateSurveyType";

const useSaveSurvey = (id: string) => {
  const t = useTranslations("UserDashboard.editSurvey");
  const { showAlert } = useAlert();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useApiMutation<UpdateSurveyProps, SurveyResponse>({
    mutationFn: values => UpdateSurvey(id, values),
    options: {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["survey"],
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
  return {  mutate, isSaving: isPending };
};

export default useSaveSurvey;
