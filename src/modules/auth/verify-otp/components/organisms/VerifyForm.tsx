import { useTranslations } from "next-intl";
import OtpInput from "../molecules/OtpInput";

export default function VerifyOtp() {
  const t = useTranslations("otp");

  return (
    <section className="mx-auto flex w-full flex-col items-center gap-8 px-5 py-35 text-center">
      {/* header */}
      <header className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-semibold text-black dark:text-white sm:text-4xl">
          {t("title")}
        </h1>
        <p className="max-w-md text-xs text-gray-500 dark:text-white/40 sm:text-sm">
          {t("description")}
        </p>
      </header>

      <form className="flex w-full max-w-sm flex-col items-center gap-6">
        {/* otp inputs */}
        <OtpInput length={6} />

        {/* timer */}
        <p className="text-[11px] text-gray-400">{t("expire", { seconds: 60 })}</p>

        {/* buttons */}
        <div className="flex w-full flex-col gap-3">
          <button
            type="submit"
            className="h-10 w-full rounded-md bg-[#00a9b1] text-sm font-medium text-white transition hover:bg-[#008f96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a9b1]"
          >
            {t("verify")}
          </button>
          <button
            type="button"
            className="h-10 w-full rounded-md border border-[#00a9b1] bg-transparent text-sm font-medium text-[#00a9b1] transition hover:bg-[#00a9b1]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a9b1]"
          >
            {t("resend")}
          </button>
        </div>
      </form>
    </section>
  );
}