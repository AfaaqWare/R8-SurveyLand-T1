"use client";

import { useRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  disabled?: boolean;
  hasError?: boolean;
};

// Controlled: الأب (VerifyForm) هو اللي بيملك قيمة الكود
export default function OtpInput({ value, onChange, length = 6, disabled, hasError }: Props) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length }, (_, i) => value[i] ?? "");

  const setDigit = (i: number, digit: string) => {
    const next = digits.map((d, idx) => (idx === i ? digit : d)).join("");
    onChange(next);
  };

  const handleChange = (i: number, v: string) => {
    const digit = v.replace(/\D/g, "").slice(-1);
    setDigit(i, digit);
    if (digit && i < length - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    onChange(pasted);
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <div dir="ltr" className="flex items-center justify-center gap-2 sm:gap-3">
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={digit}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          disabled={disabled}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          aria-invalid={hasError}
          className={`size-10 rounded-lg bg-white text-center text-2xl font-light text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-[#00a9b1]/40 disabled:opacity-60 dark:bg-gray-800 dark:text-white sm:size-11 ${
            hasError ? "ring-2 ring-red-400" : ""
          }`}
        />
      ))}
    </div>
  );
}