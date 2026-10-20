
import { getTranslations } from "next-intl/server";

import Link from "@/shared/components/atoms/Link";
import Icon from "@/shared/components/atoms/Icon";

import {
  FOOTER_COLUMNS,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
} from "@/config/footer";

import type { SocialLink } from "@/config/footer";

import NewsletterForm from "./NewsletterForm";

/* -------------------------------- Types ---------------------------------- */

type SocialIconName = "x" | "linkedin";

const SOCIAL_ICONS: Record<SocialLink["key"], SocialIconName> = {
  x: "x",
  linkedin: "linkedin",
};

/* -------------------------------- Styles --------------------------------- */

const linkClass =
  "ds-text-primary ds-text-sm ds-hover ds-rounded-sm inline-block no-underline! focus-visible:ds-focus";

/* -------------------------------- Component ------------------------------- */

export default async function Footer() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer
      className="ds-bg-card ds-text-primary"
      aria-label={t("ariaLabel")}
    >
      {/* Brand + Newsletter */}
      <div className="ds-container flex flex-col gap-6 pt-8 pb-7 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="ds-font-heading ds-title-sm ds-rounded-sm w-fit no-underline! focus-visible:ds-focus"
            aria-label={t("brand.ariaLabel")}
          >
            <span className="ds-text-alt">
              {t("brand.first")}
            </span>

            <span className="ds-text-primary">
              {t("brand.second")}
            </span>
          </Link>

          <p className="ds-text-secondary ds-text-xs max-w-[320px]">
            {t("tagline")}
          </p>
        </div>

        <NewsletterForm />
      </div>

      {/* Divider */}
      <div className="ds-container">
        <div className="ds-border-color border-t" />
      </div>

      {/* Navigation + Contact + Social */}
      <div className="ds-container py-8 lg:px-[8%]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">

          {/* Dynamic Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <nav
              key={column.id}
              aria-label={t(`columns.${column.id}`)}
            >
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className={linkClass}
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="ds-text-xs ds-font-bold ds-text-primary">
              {t("contact.title")}
            </h2>

            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className={`${linkClass} break-all`}
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h2 className="ds-text-xs ds-font-bold ds-text-primary">
              {t("social.title")}
            </h2>

            <ul className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(`social.${social.key}`)}
                    className="ds-text-primary ds-hover ds-rounded-sm inline-flex focus-visible:ds-focus"
                  >
                    <Icon
                      name={SOCIAL_ICONS[social.key]}
                      size={16}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="ds-container">
        <div className="ds-border-color border-t" />
      </div>

      {/* Copyright */}
      <div className="ds-container py-6">
        <p className="ds-text-xs ds-text-primary text-center">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
