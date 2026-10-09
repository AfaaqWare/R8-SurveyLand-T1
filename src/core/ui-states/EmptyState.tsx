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
}

export default function EmptyState({ message = "لا توجد بيانات لعرضها.", className }: Props) {
  const t = useTranslations("ui-state");
  message = t("empty.default");

  return (
    <div className={`flex min-h-[60vh] flex-col items-center justify-center ${className || ""}`}>
      <Player autoplay loop src="/assets/lottie/No-Data.json" className="h-48 w-48" />
      <p className="mt-4 text-gray-500">{message}</p>
    </div>
  );
}
