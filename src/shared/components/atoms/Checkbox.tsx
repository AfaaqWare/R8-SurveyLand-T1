import { forwardRef, useId } from "react";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  errorMessage?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, errorMessage, disabled, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-[var(--space-xs)]">
        <label
          htmlFor={inputId}
          className={cn(
            "group flex w-fit cursor-pointer items-center gap-[var(--space-sm)]",
            "has-[:checked]:[&_.checkbox]:bg-[var(--color-primary)]",
            "has-[:checked]:[&_.checkbox]:border-[var(--color-primary)]",
            "has-[:checked]:[&_.check-icon]:opacity-100",
            disabled && "cursor-not-allowed opacity-[var(--opacity-disabled)]"
          )}
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            className="sr-only"
            {...props}
          />

          <span
            className={cn(
              "checkbox flex h-5 w-5 items-center justify-center rounded border-2",
              "border-[var(--color-text-disabled)] transition-all duration-150",
              "group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-[var(--focus-ring-color)]",
              className
            )}
          >
            <CheckIcon
              size={14}
              className="check-icon text-white opacity-0 transition-opacity duration-150"
            />
          </span>

          {label && <span className="ds-text-sm ds-text-secondary">{label}</span>}
        </label>

        {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
