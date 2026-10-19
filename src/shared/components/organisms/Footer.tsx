import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Templates", href: "/templates" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border-color)] bg-[var(--color-bg-card)]">
      <div className="ds-container py-8 md:py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-[var(--color-primary)]">
              SurveyLand
            </Link>
            <p className="mt-1 max-w-xs text-sm text-[var(--color-text-secondary)]">
              Make smarter decisions with better data. Create surveys, gather feedback, and grow.
            </p>
          </div>
          <form
            action="mailto:support@example.com"
            method="post"
            encType="text/plain"
            className="mt-3 flex w-full max-w-sm gap-2 sm:mt-0"
          >
            <label htmlFor="footer-email" className="sr-only">
              Your email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Stay informed by entering your email"
              className="min-w-0 flex-1 rounded-md border border-[var(--border-color)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Enter
            </button>
          </form>
        </div>

        <div className="my-7 border-t border-[var(--border-color)]" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {footerGroups.map(group => (
            <div key={group.title}>
              <h2 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
                {group.title}
              </h2>
              <ul className="space-y-2">
                {group.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
              E-mail us at
            </h2>
            <a
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
              href="mailto:support@example.com"
            >
              support@example.com
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
              Follow us
            </h2>
            <div className="flex gap-4 text-sm text-[var(--color-text-secondary)]">
              <a href="https://x.com" aria-label="X">
                X
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>
        </div>
        <div className="mt-7 border-t border-[var(--border-color)] pt-5 text-center text-xs text-[var(--color-text-secondary)]">
          © {new Date().getFullYear()} SurveyLand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
