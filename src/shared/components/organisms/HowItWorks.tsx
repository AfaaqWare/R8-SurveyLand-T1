import Heading from "@/shared/components/molecules/Heading";
import TextCard from "@/shared/components/molecules/TextCard";
import { getTranslations } from "next-intl/server";

export default async function HowItWorks() {
  const t = await getTranslations("publicPages.home.how-it-works");

  return (
    <section className="ds-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-16 md:px-16">
        <Heading
          title={t("title")}
          highlightText={t("highlight")}
          text={t("description")}
          className="gap-3"
        />
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <TextCard title={t("create.title")} text={t("create.description")} />
          <TextCard title={t("share.title")} text={t("share.description")} />
          <TextCard title={t("analyze.title")} text={t("analyze.description")} />
        </div>
      </div>
    </section>
  );
}
