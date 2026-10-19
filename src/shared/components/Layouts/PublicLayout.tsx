import type { ReactNode } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

type PublicLayoutProps = { children: ReactNode };

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
