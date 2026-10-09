export const formatDate = (date: string, locale: string = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
