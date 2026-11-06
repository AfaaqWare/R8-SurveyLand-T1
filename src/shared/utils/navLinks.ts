export type NavLinkItem = {
  key: "home" | "about" | "contact" | "faqs" | "pricing";
  href: "/" | "/about" | "/contact" | "/faqs" | "/pricing";
};

export const NAV_LINKS: NavLinkItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "faqs", href: "/faqs" },
  { key: "pricing", href: "/pricing" },
];
