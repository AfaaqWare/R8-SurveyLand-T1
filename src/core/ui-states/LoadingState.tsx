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
export default function LoadingState({ message, className }: Props) {
  const t = useTranslations("ui-state");
  message = t("loading");
  return (
    <div className={`flex min-h-[60vh] flex-col items-center justify-center ${className || ""}`}>
      <Player autoplay loop src="/assets/lottie/Loading.json" className="h-90 w-90" />
      <p className="mt-4 text-gray-500">{message}</p>
    </div>
  );
}
