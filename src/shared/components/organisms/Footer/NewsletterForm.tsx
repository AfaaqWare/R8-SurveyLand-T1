"use client";

import { useId, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { NEWSLETTER_ENDPOINT } from "@/modules/guest/utils/data";

type Status = "idle" | "loading" | "success" | "error" | "invalid";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  /** اختياري: لو عايز تستبدل الـ fetch الافتراضي بـ server action أو service خاص بيك */
  onSubscribe?: (email: string) => Promise<void>;
};

export default function NewsletterForm({ onSubscribe }: Props) {
  const t = useTranslations("Footer.newsletter");
  const inputId = useId();
  const messageId = useId();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_REGEX.test(value)) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    try {
      if (onSubscribe) {
        await onSubscribe(value);
      } else {
        const res = await fetch(NEWSLETTER_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: value }),
        });
        if (!res.ok) throw new Error("Subscribe failed");
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const hasMessage = status !== "idle" && status !== "loading";
  const messageIsError = status === "invalid" || status === "error";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full md:max-w-[340px]"
    >
      <label htmlFor={inputId} className="sr-only">
        {t("label")}
      </label>

      <div className="ds-rounded-lg flex w-full overflow-hidden">
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle" && status !== "loading") setStatus("idle");
          }}
          placeholder={t("placeholder")}
          aria-invalid={status === "invalid"}
          aria-describedby={hasMessage ? messageId : undefined}
          className="ds-bg-form ds-text-primary ds-text-xs min-w-0 flex-1 px-4 py-3 outline-none placeholder:text-(--color-text-secondary) focus:ds-focus"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="ds-bg-primary ds-text-white ds-text-sm ds-font-bold ds-hover cursor-pointer px-5 focus-visible:ds-focus disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? t("loading") : t("submit")}
        </button>
      </div>

      <p
        id={messageId}
        role="status"
        aria-live="polite"
        className={`ds-text-xs mt-2 min-h-4 ${
          messageIsError ? "ds-text-danger" : "ds-text-success"
        }`}
      >
        {status === "invalid" && t("invalid")}
        {status === "error" && t("error")}
        {status === "success" && t("success")}
      </p>
    </form>
  );
}