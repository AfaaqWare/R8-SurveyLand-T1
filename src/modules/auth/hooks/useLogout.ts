"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { TokenService } from "@/services/tokenService";
import { useAlert } from "@/shared/hooks/useAlert";

const useLogout = () => {
  const t = useTranslations("publicPages.navbar");
  const router = useRouter();
  const { showAlert } = useAlert();
  const [isPending, setIsPending] = useState(false);

  const handleLogout = async (onDone?: () => void) => {
    setIsPending(true);

    TokenService.removeToken();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    await showAlert("success", t("logoutSuccess"));
    onDone?.();
    router.replace("/sign-in");
    router.refresh();

    setIsPending(false);
  };

  return { handleLogout, isPending };
};

export default useLogout;
