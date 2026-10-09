import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface IconInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  icon?: ReactNode;
  trailingAction?: ReactNode;
  label?: string;
  errorMessage?: string;
  hint?: string;
}

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  (
    { icon, trailingAction, label, errorMessage, hint, className, id, required, ...rest },
    ref
  ) => {
    const generatedId = useId().replace(/:/g, "");
    const inputId = id ?? `icon-input-${generatedId}`;

    return (
      <div className="flex flex-col gap-[var(--space-xs)]">
        {label && (
          <label
            htmlFor={inputId}
            className="ds-text-sm font-medium leading-none ds-text-primary"
          >
            {label}
            {required && (
              <span className="ms-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {icon && (
            <span className="pointer-events-none absolute inset-y-0 start-4 flex items-center ds-text-disabled">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            aria-invalid={Boolean(errorMessage)}
            className={cn(
              "h-12 w-full rounded-lg border ds-border-input ds-bg-form",
              "text-start text-base ds-text-primary",
              "placeholder:text-[var(--color-text-disabled)]",
              "outline-none transition-colors duration-[var(--motion-fast)]",
              "focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
              "disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
              icon ? "ps-11" : "ps-4",
              trailingAction ? "pe-12" : "pe-4",
              className
            )}
            {...rest}
          />

          {trailingAction && (
            <span className="absolute inset-y-0 end-4 flex items-center ds-text-secondary">
              {trailingAction}
            </span>
          )}
        </div>

        {errorMessage ? (
          <p role="alert" className="text-xs leading-snug text-red-500">
            {errorMessage}
          </p>
        ) : hint ? (
          <p className="text-xs leading-snug ds-text-secondary">{hint}</p>
        ) : null}
      </div>
    );
  }
);

IconInput.displayName = "IconInput";

export default IconInput;
