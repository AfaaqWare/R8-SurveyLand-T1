import Text from "@/shared/components/atoms/Text";
import type { ReactNode } from "react";

interface FieldWrapperProps {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

const FieldWrapper = ({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
}: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="ds-text-sm ds-text-primary font-bold">
        {label}
        {required && (
          <span className="ds-text-danger ms-1" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {hint && (
        <Text variant="secondary" size="xs">
          {hint}
        </Text>
      )}

      {children}

      {error && (
        <Text size="xs" className="ds-text-danger">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FieldWrapper;
