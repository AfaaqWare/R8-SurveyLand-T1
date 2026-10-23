"use client";

import { useState } from "react";
import type { FieldValues } from "react-hook-form";

import { Eye, EyeOff, Lock } from "@/assets/icons/icons";
import FormField, { type FormFieldProps } from "./FormField";

type PasswordInputProps<T extends FieldValues> = Omit<
  FormFieldProps<T>,
  "type" | "rightAddon" | "leftIcon"
> & {
  showLabel: string;
  hideLabel: string;
};

export default function PasswordInput<T extends FieldValues>({
  showLabel,
  hideLabel,
  ...props
}: PasswordInputProps<T>) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField
      {...props}
      type={visible ? "text" : "password"}
      leftIcon={<Lock className="h-5 w-5" />}
      rightAddon={
        // A plain <button> avoids fighting the Button component's own styles
        // (no more `!bg-transparent!` overrides).
        <button
          type="button"
          onClick={() => setVisible((prev) => !prev)}
          aria-label={visible ? hideLabel : showLabel}
          aria-pressed={visible}
          className="ds-text-secondary flex items-center rounded p-1 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      }
    />
  );
}