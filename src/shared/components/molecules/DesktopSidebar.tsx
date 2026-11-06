"use client";

import type { ReactNode } from "react";

type Props = {
  children: (onNavigate: () => void) => ReactNode;
};

export default function DesktopSidebar({ children }: Props) {
  const handleNavigate = () => {};

  return (
    <aside className="ds-bg-alt ds-border-color sticky top-[64px] hidden h-[calc(100vh-64px)] w-60 max-w-80 flex-col overflow-y-auto dashboard-sidebar-scrollbar border-e lg:flex">
      {children(handleNavigate)}
    </aside>
  );
}
