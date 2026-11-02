import type { ReactNode } from "react";

type ProfileFieldProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export default function ProfileField({
  id,
  label,
  children,
}: ProfileFieldProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium ds-text-secondary"
      >
        {label}
      </label>

      {children}
    </div>
  );
}
