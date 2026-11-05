import type { ReactNode } from "react";

import UserSidebar from "@/shared/components/organisms/UserSidebar";

type Props = {
  children: ReactNode;
};

export default function UserTemplate({ children }: Props) {
  return (
    <div className="ds-bg flex min-h-screen w-full">
      <UserSidebar />

      <main className="min-w-0 flex-1 p-4 pt-16 md:p-6 md:pt-16 lg:ms-80 lg:pe-8 lg:pt-6">
        {children}
      </main>
    </div>
  );
}
