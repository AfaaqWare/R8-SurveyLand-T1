import Image from "next/image";
import Link from "next/link";
import surveyDone from "@/assets/images/SyrveyDone.png";

type ThankYouProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  detailTitle?: string;
  detailText?: string;
  actionLabel?: string;
  actionHref?: string;
};

/** Reusable success content. Place it inside the page/layout that should contain it. */
export default function ThankYou({
  title = "Thank You!",
  subtitle = "Your response has been submitted successfully",
  description = "We really appreciate you taking the time to complete this survey. Your feedback helps us improve and make better decisions.",
  detailTitle = "Your opinion matters",
  detailText = "Every response helps us understand your needs and improve your experience.",
  actionLabel = "Back Home",
  actionHref = "/",
}: ThankYouProps) {
  return (
    <section aria-labelledby="thank-you-title" className="relative isolate flex w-full items-center justify-center overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
      <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-40 w-40 rounded-full bg-[var(--color-primary)]/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-16 top-0 -z-10 h-40 w-40 rounded-full bg-[var(--color-primary)]/5 blur-2xl" />

      <div className="w-full max-w-2xl rounded-2xl bg-[var(--color-bg-card)] px-5 py-8 text-center shadow-[var(--shadow-card)] sm:px-10 sm:py-10">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[var(--color-primary)]/10 sm:h-28 sm:w-28">
          <Image src={surveyDone} alt="Survey completed successfully" priority className="h-full w-full object-contain" />
        </div>

        <h1 id="thank-you-title" className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">{title}</h1>
        <p className="mt-2 text-sm font-medium text-[var(--color-primary)] sm:text-base">{subtitle}</p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[var(--color-text-secondary)]">{description}</p>

        <div className="mx-auto mt-6 flex max-w-lg items-start gap-3 rounded-lg bg-[var(--color-primary)]/5 p-4 text-left">
          <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-sm text-[var(--color-primary)]">✓</span>
          <div>
            <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">{detailTitle}</h2>
            <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{detailText}</p>
          </div>
        </div>

        <Link href={actionHref} className="mt-6 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
          <span aria-hidden="true">⌂</span>{actionLabel}
        </Link>
      </div>
    </section>
  );
}
