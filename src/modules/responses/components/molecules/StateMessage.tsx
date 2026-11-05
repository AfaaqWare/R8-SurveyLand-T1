import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  text: string;
  actionLabel?: string;
  onAction?: () => void;
  role?: "status" | "alert";
};

export default function StateMessage({
  icon,
  title,
  text,
  actionLabel,
  onAction,
  role = "status",
}: Props) {
  return (
    <div role={role} className="flex flex-col items-center gap-3 px-6 py-12 text-center">
      <span className="text-[color:var(--color-text-secondary)]">{icon}</span>
      <div className="flex max-w-md flex-col gap-1">
        <h2 className="font-semibold text-[color:var(--color-text-primary)]">{title}</h2>
        <p className="text-sm text-[color:var(--color-text-secondary)]">{text}</p>
      </div>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="rounded-md px-3 py-2 text-sm font-medium text-[color:var(--color-primary)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primary)]"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
