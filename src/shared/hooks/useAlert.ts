import Swal from "sweetalert2";
import { useTranslations } from "next-intl";

export function useAlert() {
  const t = useTranslations("common");

  const showAlert = (icon: "success" | "error", title: string) => {
    void Swal.fire({
      icon,
      title,
      confirmButtonText: t("ok"),
      confirmButtonColor: "var(--color-primary)",
    });
  };

  return {
    showAlert,
  };
}
