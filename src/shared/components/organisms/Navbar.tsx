"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";

import Link from "@/shared/components/atoms/Link";
import Button from "@/shared/components/atoms/Button";
import { Menu, X } from "@/assets/icons/icons";

type NavbarProps = {
  /** Theme and language controls passed from the layout */
  controls?: ReactNode;
};

type NavLinkItem = {
  key: "home" | "about" | "contact" | "faqs" | "pricing";
  href: "/" | "/about" | "/contact" | "/faqs" | "/pricing";
};

const NAV_LINKS: NavLinkItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
  { key: "faqs", href: "/faqs" },
  { key: "pricing", href: "/pricing" },
];

const linkClass =
  "text-sm font-medium text-gray-600 no-underline! transition-colors hover:text-cyan-400 dark:text-gray-300 dark:hover:text-cyan-400";

export default function Navbar({ controls }: NavbarProps) {
  const t = useTranslations("publicPages.navbar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignUp = () => {
    setIsMenuOpen(false);
    window.location.href = "/sign-up";
  };

  return (
    <header className="ds-bg sticky top-0 z-50 w-full shadow-sm">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 no-underline!"
          aria-label="Survey Land - Home"
        >
          <span className="ds-font-heading text-xl font-bold text-cyan-400">
            Survey
          </span>
          <span className="ds-font-heading text-xl font-bold text-gray-900 dark:text-white">
            Land
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={linkClass}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          {controls}

          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 no-underline! hover:text-cyan-400 dark:text-gray-200 dark:hover:text-cyan-400"
          >
            {t("login")}
          </Link>

          <Button
            variant="primary"
            isRounded
            size="md"
            className="bg-cyan-500 px-5 text-white uppercase hover:bg-cyan-600"
            onClick={handleSignUp}
          >
            {t("signup")}
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex min-w-0 items-center gap-2 lg:hidden">
          {controls}

          <Button
            type="button"
            variant="ghost"
            size="md"
            className="flex h-10 w-10 shrink-0 items-center justify-center !p-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="ds-bg-card border-t ds-border-color px-4 py-4 sm:px-6 lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={closeMenu}
                className="ds-text-primary ds-hover ds-rounded-sm block px-3 py-3 text-sm font-medium no-underline!"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2 border-t ds-border-color pt-3">
            <Link
              href="/sign-in"
              onClick={closeMenu}
              className="ds-text-primary ds-hover ds-rounded-sm block px-3 py-3 text-sm font-medium no-underline!"
            >
              {t("login")}
            </Link>

            <Button
              variant="primary"
              isRounded
              size="md"
              className="w-full bg-cyan-500 text-white uppercase hover:bg-cyan-600"
              onClick={handleSignUp}
            >
              {t("signup")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}