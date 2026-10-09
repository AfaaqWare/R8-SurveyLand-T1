import { Metadata } from "next";
import { SeoProps } from "./seo.types";
import { defaultSeo } from "./seo.config";

export function buildSeo({ title, description, keywords, noIndex }: SeoProps): Metadata {
  return {
    title: title ?? defaultSeo.title,
    description: description ?? defaultSeo.description,
    keywords,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
  };
}
