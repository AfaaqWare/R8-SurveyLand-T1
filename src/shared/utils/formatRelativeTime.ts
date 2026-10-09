export function formatRelativeTime(dateString: string, locale: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfDate = new Date(date);
  startOfDate.setHours(0, 0, 0, 0);

  const diffDays = Math.round(
    (startOfDate.getTime() - startOfToday.getTime()) / (1000 * 60 * 60 * 24)
  );

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return rtf.format(diffDays, "day");
}
