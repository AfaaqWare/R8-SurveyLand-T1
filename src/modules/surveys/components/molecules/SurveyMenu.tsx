"use client";

import { Eye, Link2, Pencil, Send, Trash2 } from "@/assets/icons/icons";
import useDeleteSurvey from "../../hooks/useDeleteSurvey";

const itemClass = "flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm";

export default function SurveyMenu({ surveyId }: { surveyId: string }) {
  const { mutate, isPending } = useDeleteSurvey();
  return (
    <div
      role="menu"
      className="ds-bg-card absolute top-10 right-0 z-20 w-40 overflow-hidden rounded-xl py-1.5 shadow-lg"
    >
      <button type="button" role="menuitem" className={itemClass}>
        <Eye size={16} />
        Preview
      </button>
      <button type="button" role="menuitem" className={itemClass}>
        <Pencil size={16} />
        Edit
      </button>
      <button type="button" role="menuitem" className={itemClass}>
        <Send size={16} />
        Publish
      </button>
      <button type="button" role="menuitem" className={itemClass}>
        <Link2 size={16} />
        Copy Link
      </button>
      <button
        type="button"
        role="menuitem"
        disabled={isPending}
        onClick={() => mutate(surveyId)}
        className={`${itemClass} ds-text-danger disabled:cursor-not-allowed disabled:opacity-50`}
      >
        <Trash2 size={16} />
        Delete
      </button>
    </div>
  );
}
