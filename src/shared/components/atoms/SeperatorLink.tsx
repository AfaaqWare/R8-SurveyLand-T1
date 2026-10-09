import React from "react";
import { cn } from "../../../lib/cn";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}
export default function SeperatorLink({ orientation = "horizontal", className }: SeparatorProps) {
  return (
    <div
      className={cn(
        "ds-bg-secondary-alt",
        orientation === "horizontal" ? "h-px w-full" : "my-auto h-full w-px",
        className
      )}
    ></div>
  );
}
