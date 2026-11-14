import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getSeoMetadata } from "./getSeoMetadata";

export type LocaleParamsProps = {
  params: Promise<{ locale: string }>;
};

type PageSeoOptions = {
  params: Promise<{ locale: string }>;
  namespace: string;
  titleNamespace?: string;
  titleKey: string;
  descriptionKey?: string;
  brandSuffix?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export async function resolvePageSeoMetadata({
  params,
  namespace,
  titleNamespace,
  titleKey,
  descriptionKey,
  brandSuffix = "Survey Land",
  keywords,
  noIndex = false,
}: PageSeoOptions): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });
  const tTitle = titleNamespace
    ? await getTranslations({ locale, namespace: titleNamespace })
    : t;

  const translatedTitle = tTitle.markup(titleKey, {
    highlight: (chunks) => chunks,
  });
  const title = brandSuffix ? `${translatedTitle} | ${brandSuffix}` : translatedTitle;
  const description = descriptionKey ? t(descriptionKey) : undefined;

  return getSeoMetadata({
    title,
    description,
    keywords,
    noIndex,
  });
}