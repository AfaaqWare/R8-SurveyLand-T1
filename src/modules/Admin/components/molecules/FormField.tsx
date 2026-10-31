import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export default function FormField({ id, label, hint, required, error, children }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-base font-medium text-(--color-text-primary)">
        {label}
        {required && <span className="ms-1 text-(--color-error)">*</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-(--color-text-secondary)">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-(--color-error)">
          {error}
        </p>
      )}
    </div>
  );
}