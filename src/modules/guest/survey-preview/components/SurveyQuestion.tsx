"use client";

import { useState } from "react";
import { ClipboardList, FileText, Send } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";

export type Question =
  | { id: string; type: "radio"; label: string; options: string[]; required?: boolean }
  | { id: string; type: "text"; label: string; maxLength: number; required?: boolean };


function QuestionNumber({ n }: { n: number }) {
  return (
    <span className="flex size-8 items-center justify-center rounded-md bg-[#00a9b1] text-sm font-semibold text-white">
      {n}
    </span>
  );
}

function RadioQuestion({ q }: { q: Extract<Question, { type: "radio" }> }) {
  return (
    <fieldset className="flex flex-col gap-1.5">
      <legend className="sr-only">{q.label}</legend>
      {q.options.map((opt) => (
        <label
          key={opt}
          className="flex w-fit cursor-pointer items-center gap-2 text-xs text-gray-700 dark:text-gray-300"
        >
          <input type="radio" name={q.id} value={opt} className="size-3 accent-[#00a9b1]" />
          {opt}
        </label>
      ))}
    </fieldset>
  );
}

function TextQuestion({ q }: { q: Extract<Question, { type: "text" }> }) {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <textarea
        id={q.id}
        dir="auto"
        rows={4}
        maxLength={q.maxLength}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full resize-none rounded-lg border border-gray-300 bg-transparent p-3 text-xs text-gray-900 outline-none transition focus:border-[#00a9b1] focus:ring-2 focus:ring-[#00a9b1]/20 dark:border-gray-600 dark:text-white"
      />
      <p className="text-end text-[11px] text-gray-400">
        {value.length}/{q.maxLength}
      </p>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  valueClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  valueClass: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 dark:bg-gray-800">
      {icon}
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-gray-900 dark:text-white">{label}</span>
        <span className={`text-[10px] font-medium ${valueClass}`}>{value}</span>
      </div>
    </div>
  );
}


export default function QuestionsCard({ questions }: { questions: Question[] }) {
  const requiredCount = questions.filter((q) => q.required).length;

  const t =  useTranslations ("surveyPreview.questions")

  return (
    <section className="overflow-hidden rounded-2xl  bg-white dark:bg-black">
      {/* title */}
      <div className="flex items-center gap-2 px-6 pt-5">
        <ClipboardList className="size-5 text-[#00a9b1]" />
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          {t('title')}
          </h2>
      </div>

      {/* main */}
      <ol className="mt-5 divide-y divide-gray-200 px-6 dark:divide-gray-700">
        {questions.map((q, i) => (
          <li key={q.id} className="grid grid-cols-[auto_1fr] items-start gap-x-4 py-5 first:pt-0">
            <QuestionNumber n={i + 1} />

            <div className="flex min-w-0 flex-col gap-2">
              <p dir="auto" className="text-sm font-medium text-gray-900 dark:text-white">
                {q.label}
                {q.required && <span className="ms-1 text-red-500">*</span>}
              </p>

              {q.type === "radio" ? <RadioQuestion q={q} /> : <TextQuestion q={q} />}
            </div>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-3 border-t border-gray-200 bg-[#e1e8e9] p-4 dark:border-gray-700 dark:bg-gray-800/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <StatCard
            icon={<ClipboardList className="size-6 text-[#00a9b1]" />}
            label={t('total')}
            value={questions.length}
            valueClass="text-[#00a9b1]"
          />
          <StatCard
            icon={<FileText className="size-5 text-amber-600" />}
            label={t('required')}
            value={requiredCount}
            valueClass="text-amber-600"
          />
        </div>

        <button
          type="submit"
          className="flex h-12 items-center justify-center gap-3 rounded-xl bg-[#00a9b1] px-10 text-sm font-semibold text-white transition hover:bg-[#008f96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a9b1] sm:min-w-64"
        >
          <Send className="size-5 rtl:-scale-x-100" />
          {t('submit')}
        </button>
      </div>
    </section>
  );
}