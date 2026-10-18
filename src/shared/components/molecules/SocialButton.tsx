"use client";

import React from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string; // يستخدم كـ aria-label و title للوصولية (Accessibility)
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function SocialButton({
  icon,
  label,
  onClick,
  type = "button",
}: SocialButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color-card)] bg-[var(--color-bg-alt)] transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-subtle)] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
    >
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
    </button>
  );
}