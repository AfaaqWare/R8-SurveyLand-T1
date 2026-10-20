import React from "react";
import Title from "@/shared/components/atoms/Title";
import Text from "@/shared/components/atoms/Text";

export default function VerifyForm() {
  return (
    <div>
      <div className="ds-bg flex min-h-screen flex-col items-center justify-center px-4">
        <Title size="xl" isCenter className="ds-text-primary mb-3">
          Verify Your Identity
        </Title>

        <Text size="sm" variant="secondary" isCenter className="mb-8 max-w-md">
          {`We've sent a 6-digit code to your email. Please enter it below to verify your account.`}
        </Text>
        <div className="mb-6 flex gap-3" dir="ltr">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="ds-text-primary ds-bg-alt ds-border-input ds-rounded-md h-14 w-12 border text-center outline-none"
            />
          ))}
        </div>

        <Text size="sm" variant="secondary" isCenter className="mb-8 max-w-md">
          This code will expire in 60 seconds
        </Text>
        <div className="flex w-full max-w-[380px] flex-col gap-3">
          <button className="ds-bg-primary ds-text-white ds-text-sm ds-font-bold ds-rounded-md h-[var(--button-form-height)] w-full">
            Verify
          </button>

          <button className="ds-border-primary ds-text-alt ds-text-sm ds-font-bold ds-rounded-md h-[var(--button-form-height)] w-full border bg-transparent">
            Send again
          </button>
        </div>
      </div>
    </div>
  );
}
