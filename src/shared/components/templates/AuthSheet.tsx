import Link from "next/link";
import Button from "@/shared/components/atoms/Button";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";

export interface AuthSheetProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function AuthSheet({ title, subtitle, ctaLabel, ctaHref }: AuthSheetProps) {
  return (
    <section className="ds-bg-primary flex w-full flex-1 flex-col items-center justify-center gap-[var(--space-xl)] px-6 py-16 text-center">
      <div className="flex max-w-[340px] flex-col items-center gap-[var(--space-4xl)]">
        <Title variant="white">{title}</Title>

        {subtitle && (
          <Text variant="white" size="md" className="mb-6 font-bold">
            {subtitle}
          </Text>
        )}
        <Link className="w-full md:w-fit" href={ctaHref}>
          <Button isFullWidth variant="panel" isRounded>
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
