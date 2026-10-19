import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-[var(--border-color)] bg-[var(--color-bg-card)]">
      <div className="ds-container flex min-h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="SurveyLand home" className="shrink-0 text-lg font-bold tracking-tight text-[var(--color-primary)]">
          SurveyLand
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link href="/login" className="hidden text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] sm:inline-flex">
            Login
          </Link>
          <Link href="/sign-up" className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
