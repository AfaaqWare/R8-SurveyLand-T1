// Formats an ISO date string as separate date/time parts, e.g.
// { date: "30 May 2026", time: "04:51 PM" } - used where a timestamp needs
// to be shown stacked (responses table / response cards).
export const formatDateTime = (isoDate: string) => {
  const date = new Date(isoDate);

  return {
    date: date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  };
};
