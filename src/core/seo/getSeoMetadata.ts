import { buildSeo } from "./Seo";
import { SeoProps } from "./seo.types";

export function getSeoMetadata(seo: SeoProps) {
  return buildSeo(seo);
}
