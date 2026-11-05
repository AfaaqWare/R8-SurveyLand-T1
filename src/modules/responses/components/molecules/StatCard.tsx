import type { ReactNode } from "react";
import { panelClass } from "../styles";

type Tone = "teal" | "purple" | "orange" | "green";

type Props = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  caption: string;
  tone: Tone;
  onClick?: () => void;
  disabled?: boolean;
};

export default function StatCard({ icon, label, value, caption, tone, onClick, disabled }: Props) {
  const color = `var(--color-stats-${tone})`;
  const background = `var(--color-stats-${tone}-bg)`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className="flex size-12 shrink-0 items-center justify-center rounded-xl"
        style={{ color, backgroundColor: background }}
      >
        {icon}
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 text-start">
        <span className="truncate text-xs text-[color:var(--color-text-secondary)]">{label}</span>
        <span className="truncate text-2xl leading-tight font-semibold" style={{ color }}>
          {value}
        </span>
        <span className="truncate text-xs text-[color:var(--color-text-disabled)]">{caption}</span>
      </span>
    </>
  );

  const base = `${panelClass} flex items-center gap-4 p-4`;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`${base} w-full cursor-pointer transition hover:border-[color:var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60`}
      >
        {content}
      </button>
    );
  }

  return <div className={base}>{content}</div>;
}