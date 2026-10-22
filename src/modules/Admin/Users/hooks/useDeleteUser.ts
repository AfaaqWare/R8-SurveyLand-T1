"use client";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { useAlert } from "@/shared/hooks/useAlert";
import { deleteUser } from "../api/deleteUser";
import { USERS_QUERY_KEY } from "./useGetUsers";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const t = useTranslations("dashboard.users");
  const { showAlert } = useAlert();

  return useApiMutation<string, unknown>({
    mutationFn: deleteUser,
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
        showAlert("success", t("deleted"));
      },
      onError: () => {
        showAlert("error", t("errors.generic"));
      },
    },
  });
}
