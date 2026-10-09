import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function FooterInput({ btn, placeholder }: { btn: string; placeholder: string }) {
  return (
    <div className="ds-bg-form border-disabled flex w-full flex-row items-center justify-between gap-4 rounded-md">
      <Input
        id="footerInput"
        placeholder={placeholder}
        className="text-xs focus-within:outline-none md:text-sm"
      />
      <Button size="sm">{btn}</Button>
    </div>
  );
}
