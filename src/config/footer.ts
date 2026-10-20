
export type FooterLink = {
  key: string;
  href: string;
};

export type FooterColumn = {
  id: string;
  links: FooterLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    id: "product",
    links: [
      { key: "home", href: "/" },
      { key: "templates", href: "/templates" },
      { key: "pricing", href: "/pricing" },
      { key: "integrations", href: "/integrations" },
    ],
  },
  {
    id: "support",
    links: [
      { key: "helpCenter", href: "/help-center" },
      { key: "terms", href: "/terms-of-service" },
      { key: "privacy", href: "/privacy-policy" },
      { key: "refund", href: "/refund-policy" },
      { key: "faqs", href: "/faqs" },
    ],
  },
];

export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "Support@example.com";

export type SocialLink = {
  key: "x" | "linkedin";
  href: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { key: "x", href: process.env.NEXT_PUBLIC_X_URL ?? "https://x.com" },
  {
    key: "linkedin",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com",
  },
];

export const NEWSLETTER_ENDPOINT = "/api/newsletter";
