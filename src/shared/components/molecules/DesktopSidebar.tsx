"use client";

import type { ReactNode } from "react";

type Props = {
  children: (onNavigate: () => void) => ReactNode;
};

export default function DesktopSidebar({ children }: Props) {
  const handleNavigate = () => {};

  return (
    <aside className="ds-bg-alt ds-border-color fixed inset-y-0 start-0 z-30 hidden h-screen w-80 flex-col overflow-y-auto dashboard-sidebar-scrollbar border-e lg:flex">
      {children(handleNavigate)}
    </aside>
  );
}
