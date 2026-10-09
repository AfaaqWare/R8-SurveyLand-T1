import React from "react";
import Button from "../atoms/Button";
import { cn } from "@/lib/cn";
interface Props {
  btn1?: string;
  btn2?: string;
  variant1?: "primary" | "secondary" | "outline" | "outline1" | "ghost" | "primary200" | "disabled";
  variant2?: "primary" | "secondary" | "outline" | "outline1" | "ghost" | "primary200" | "disabled";
  className?: string;
  children?: React.ReactNode;
}
export default function Buttons({
  btn2,
  btn1,
  variant1 = "primary",
  variant2 = "outline",
  className = "",
  children,
}: Props) {
  return (
    <div className={cn("flex gap-4", className)}>
      {children ? (
        children
      ) : (
        <>
          <Button size="md" variant={variant1}>
            {btn1}
          </Button>
          <Button size="md" variant={variant2}>
            {btn2}
          </Button>
        </>
      )}
    </div>
  );
}
