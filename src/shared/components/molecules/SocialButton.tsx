"use client";

import React from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  /** Added: lets the page block social sign-up while the form is submitting */
  disabled?: boolean;
}

export default function SocialButton({
  icon,
  label,
  onClick,
  type = "button",
  disabled = false,
}: SocialButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color-card)] bg-[var(--color-bg-alt)] transition-all duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-bg-subtle)] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
    >
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
    </button>
  );
}
