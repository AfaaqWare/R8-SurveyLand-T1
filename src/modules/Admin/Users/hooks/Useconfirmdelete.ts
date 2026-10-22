"use client";
import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

/**
 * The project's useAlert only supports a single OK button, so deletion needs
 * its own confirm dialog. Resolves to true when the admin confirms.
 */
export function useConfirmDelete() {
  const t = useTranslations("dashboard.users.delete");

  return async (name: string): Promise<boolean> => {
    const result = await Swal.fire({
      icon: "warning",
      title: t("title"),
      text: t("text", { name }),
      showCancelButton: true,
      confirmButtonText: t("confirm"),
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#dc2626",
      focusCancel: true,
    });
    return result.isConfirmed;
  };
}