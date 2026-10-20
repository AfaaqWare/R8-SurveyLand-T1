"use client";

import { Controller, type Control, type FieldPath, type FieldValues } from "react-hook-form";

import Input, { type InputProps } from "@/shared/components/atoms/Input";

export type FormFieldProps<T extends FieldValues> = Omit<
  InputProps,
  "name" | "value" | "onChange" | "onBlur" | "id" | "state" | "errorMessage" | "translate"
> & {
  control: Control<T>;
  name: FieldPath<T>;
  /** Turns an error key (the zod message) into localized text. */
  translateError: (key: string) => string;
};

/**
 * Connects the project's <Input /> to react-hook-form.
 * <Input /> already renders the error message (role="alert"), the hint,
 * aria-invalid and aria-describedby, so we only drive it via `state` / `errorMessage`.
 */
export default function FormField<T extends FieldValues>({
  control,
  name,
  translateError,
  ...inputProps
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const errorKey = fieldState.error?.message;

        return (
          <Input
            {...inputProps}
            {...field}
            id={name}
            value={field.value ?? ""}
            state={errorKey ? "error" : "default"}
            errorMessage={errorKey ? translateError(errorKey) : undefined}
          />
        );
      }}
    />
  );
}
