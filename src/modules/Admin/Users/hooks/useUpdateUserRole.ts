"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { updateUserRole, type UpdateUserRolePayload } from "../api/updateUserRole";
import { USERS_QUERY_KEY } from "./useGetUsers";

export function useUpdateUserRole() {
  const queryClient = useQueryClient();
  const t = useTranslations("dashboard.users");
  const { showAlert } = useAlert();

  return useApiMutation<UpdateUserRolePayload, unknown>({
    mutationFn: updateUserRole,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
        showAlert("success", t("roleUpdated"));
      },
      onError: () => {
        showAlert("error", t("errors.generic"));
      },
    },
  });
}
