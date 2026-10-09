import { TextareaHTMLAttributes, forwardRef, useId } from "react";

type TextAreaState = "default" | "error" | "success";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: TextAreaState;
  label?: string;
  hint?: string;
  errorMessage?: string;
  required?: boolean;
}

const stateClasses: Record<TextAreaState, string> = {
  default:
    "border-[var(--border-color-muted)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20",
  error:
    "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-400/20",
  success:
    "border-green-400 focus:border-green-500 focus:ring-2 focus:ring-green-400/20",
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      state = "default",
      label,
      hint,
      errorMessage,
      required,
      disabled,
      className = "",
      id,
      ...rest
    },
    ref
  ) => {
    const textareaId = id ?? `textarea-${useId.toString().slice(2, 7)}`;

    const baseClasses = [
      "w-full rounded-lg border bg-[var(--color-bg-form)] font-[var(--font-sans)] p-3 text-sm",
      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-disabled)]",
      "outline-none transition-all duration-[var(--motion-fast)]",
      "disabled:opacity-[var(--opacity-disabled)] disabled:cursor-not-allowed",
      stateClasses[state],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-[var(--space-xs)]">
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-[var(--color-text-primary)] leading-none"
          >
            {label}
            {required && (
              <span className="ml-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={state === "error"}
          className={baseClasses}
          {...rest}
        />

        {/* Error message */}
        {state === "error" && errorMessage && (
          <p
            id={`${textareaId}-error`}
            role="alert"
            className="text-xs text-red-500 leading-snug"
          >
            {errorMessage}
          </p>
        )}

        {/* Hint */}
        {hint && state !== "error" && (
          <p
            id={`${textareaId}-hint`}
            className="text-xs text-[var(--color-text-secondary)] leading-snug"
          >
            {hint}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
