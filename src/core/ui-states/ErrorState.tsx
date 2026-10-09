"use client";
import { useTranslations } from "next-intl";
import "../../app/globals.css";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

interface Props {
  message?: string;
  className?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export default function ErrorState({
  message = "حدث خطأ غير متوقع.",
  className,
  onRetry,
  retryLabel = "إعادة المحاولة",
}: Props) {
  const t = useTranslations("ui-state.error");
  message = t("default");
  retryLabel = t("retry");

  return (
    <div className={`flex min-h-[60vh] flex-col items-center justify-center ${className || ""}`}>
      <Player autoplay loop src="/assets/lottie/error.json" className="h-48 w-48" />
      <p className="mt-4 text-red-500">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 cursor-pointer rounded-lg bg-red-300 px-6 py-2 text-white transition"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
