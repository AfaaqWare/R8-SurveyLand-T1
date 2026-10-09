import { InputHTMLAttributes, ReactNode, forwardRef, useId } from "react";

type InputSize = "sm" | "md" | "lg";
type InputState = "default" | "error" | "success";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  state?: InputState;
  label?: string;
  /** Hint text rendered below the input */
  hint?: string;
  errorMessage?: string;
  /** Icon rendered on the left side */
  leftIcon?: ReactNode;
  /** Addons rendered on the right side (e.g. "EGP", an icon button) */
  rightAddon?: ReactNode;
  required?: boolean;
}

// Class maps

const sizeClasses: Record<InputSize, string> = {
  sm: "h-[30px] px-3 text-sm",
  md: "h-[38px] px-3 text-sm",
  lg: "h-[46px] px-4 text-base",
};

// const inputMargin: Record<InputSize, string> ={
//   sm: "mt-[5px]",
//   md: "mt-[7px]",
//   lg: "mt-[10px]",
// }

const sizeWithLeftIcon: Record<InputSize, string> = {
  sm: "ps-8",
  md: "ps-9",
  lg: "ps-10",
};

const sizeWithRightAddon: Record<InputSize, string> = {
  sm: "pe-8",
  md: "pe-10",
  lg: "pe-12",
};

const iconSizeClasses: Record<InputSize, string> = {
  sm: "w-3.5 h-3.5 start-2.5",
  md: "w-4 h-4 start-3",
  lg: "w-5 h-5 start-3.5",
};

const stateClasses: Record<InputState, string> = {
  default:
    "border-[var(--border-color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
  error: "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20",
  success: "border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-400/20",
};

// Component

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      state = "default",
      label,
      hint,
      errorMessage,
      leftIcon,
      rightAddon,
      required,
      disabled,
      className = "",
      id,
      ...rest
    },
    ref
  ) => {
    const inputId = id ?? `input-${useId.toString().slice(2, 7)}`;

    const baseInputClasses = [
      "w-full rounded-lg border bg-[var(--color-bg-form)] font-[var(--font-sans)]",
      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)]",
      "outline-none transition-all duration-[var(--motion-fast)]",
      "disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
      sizeClasses[size],
      stateClasses[state],
      leftIcon ? sizeWithLeftIcon[size] : "",
      rightAddon ? sizeWithRightAddon[size] : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-[var(--space-xs)]">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm leading-none font-medium text-[var(--color-text-primary)]"
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative flex items-center">
          {/* Left icon */}
          {leftIcon && (
            <span
              className={`absolute ${iconSizeClasses[size]} pointer-events-none flex items-center justify-center text-[var(--color-text-disabled)]`}
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={state === "error"}
            aria-describedby={
              state === "error" && errorMessage
                ? `${inputId}-error`
                : hint
                  ? `${inputId}-hint`
                  : undefined
            }
            className={baseInputClasses}
            {...rest}
          />

          {/* Right addon */}
          {rightAddon && (
            <span className="absolute end-3 flex items-center text-sm text-[var(--color-text-secondary)]">
              {rightAddon}
            </span>
          )}
        </div>

        {/* Error message */}
        {state === "error" && errorMessage && (
          <p id={`${inputId}-error`} role="alert" className="text-xs leading-snug text-red-500">
            {errorMessage}
          </p>
        )}

        {/* Hint */}
        {hint && state !== "error" && (
          <p
            id={`${inputId}-hint`}
            className="text-xs leading-snug text-[var(--color-text-secondary)]"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
