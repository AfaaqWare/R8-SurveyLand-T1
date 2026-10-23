"use client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const KNOWN_ROLES = ["ADMIN", "EDITOR", "USER"] as const;
type KnownRole = (typeof KNOWN_ROLES)[number];

const isKnownRole = (role: string): role is KnownRole =>
  (KNOWN_ROLES as readonly string[]).includes(role);

interface RoleSelectProps {
  value: string;
  label: string;
  disabled?: boolean;
  onChange: (role: string) => void;
}

export default function RoleSelect({ value, label, disabled, onChange }: RoleSelectProps) {
  const t = useTranslations("dashboard.editRole.roles");
  const current = value.toUpperCase();
  const options: string[] = isKnownRole(current) ? [...KNOWN_ROLES] : [...KNOWN_ROLES, current];

  return (
    <div className="relative inline-block">
      <select
        value={current}
        aria-label={label}
        disabled={disabled}
        onChange={event => onChange(event.target.value)}
        className="ds-bg-form ds-border-color h-9 min-w-28 cursor-pointer appearance-none rounded-md border ps-3 pe-8 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {options.map(role => (
          <option key={role} value={role}>
            {isKnownRole(role) ? t(`${role}.title`) : role}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute end-2 top-1/2 size-4 -translate-y-1/2"
      />
    </div>
  );
}