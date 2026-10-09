"use client";
import { useTranslations } from "next-intl";
import "../../app/globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => mod.Player), {
  ssr: false,
});

export default function NotFoundPage() {
  const t = useTranslations("ui-state");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Player
        autoplay
        loop
        src="/assets/lottie/No-Data.json" // مسار الملف في فولدر public
        className="mb-8 h-48 w-48"
      />
      <h1 className="mb-4 text-4xl font-bold">{t("notFound.title")}</h1>
      <p className="mb-6 text-gray-500">{t("notFound.description")}</p>
      <Link
        href="/"
        className="ds-bg-primary hover:bg-primary-600 rounded-lg px-6 py-3 text-white transition"
      >
        {t("notFound.backToHome")}
      </Link>
    </div>
  );
}
