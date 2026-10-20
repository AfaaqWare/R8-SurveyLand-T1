import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthPanel({ children }: Props) {
  return (
    <section className="ds-bg flex w-full flex-2 flex-col justify-center px-3 py-3 md:py-6">
      <div className="mx-auto w-full max-w-md">{children}</div>
    </section>
  );
}
