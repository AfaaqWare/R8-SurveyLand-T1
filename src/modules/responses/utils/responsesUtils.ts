import type {
  ResponsesFilters,
  ResponsesStatsData,
  SurveyResponse,
} from "../types/ResponsesTypes";

export const DEFAULT_FILTERS: ResponsesFilters = {
  search: "",
  sort: "newest",
  from: "",
  to: "",
  surveyId: "",
  answeredOnly: false,
};

// عدد الإجابات الفعلية (بنتجاهل الإجابات الفاضية)
export const countAnswers = (response: SurveyResponse) =>
  Object.values(response.answers).filter((value) => value.trim() !== "").length;

export const shortenId = (id: string) => (id.length > 12 ? `${id.slice(0, 6)}…${id.slice(-4)}` : id);

export const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  const first = parts[0][0] ?? "";
  const second = parts.length > 1 ? (parts[1][0] ?? "") : "";
  return `${first}${second}`.toUpperCase();
};

export const formatDateTime = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));

export const formatDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(iso));

export const getUniqueSurveyIds = (data: SurveyResponse[]) => [...new Set(data.map((r) => r.surveyId))];

export const computeStats = (data: SurveyResponse[]): ResponsesStatsData => {
  let latest: number | null = null;
  for (const response of data) {
    const time = new Date(response.submittedAt).getTime();
    if (latest === null || time > latest) latest = time;
  }
  return {
    total: data.length,
    uniqueSurveys: getUniqueSurveyIds(data).length,
    latestAt: latest === null ? null : new Date(latest).toISOString(),
  };
};

export const applyFilters = (data: SurveyResponse[], filters: ResponsesFilters) => {
  const query = filters.search.trim().toLowerCase();
  const from = filters.from ? new Date(`${filters.from}T00:00:00`).getTime() : null;
  const to = filters.to ? new Date(`${filters.to}T23:59:59.999`).getTime() : null;

  const result = data.filter((response) => {
    if (query) {
      const haystack = `${response.respondentName} ${response.respondentEmail}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    const time = new Date(response.submittedAt).getTime();
    if (from !== null && time < from) return false;
    if (to !== null && time > to) return false;
    if (filters.surveyId && response.surveyId !== filters.surveyId) return false;
    if (filters.answeredOnly && countAnswers(response) === 0) return false;
    return true;
  });

  return result.sort((a, b) => {
    const diff = new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime();
    return filters.sort === "newest" ? -diff : diff;
  });
};

// أرقام الصفحات مع نقاط (…) لما يكون العدد كبير
export const getPageItems = (current: number, total: number): (number | "ellipsis")[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | "ellipsis")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("ellipsis");
  for (let page = start; page <= end; page++) items.push(page);
  if (end < total - 1) items.push("ellipsis");
  items.push(total);
  return items;
};

// تصدير CSV (بيفتح بـ Excel). الـ BOM عشان العربي يظهر صح
export const downloadCsv = (filename: string, headers: string[], rows: (string | number)[][]) => {
  const escape = (value: string | number) => {
    let text = String(value);
    if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`; // حماية من CSV injection
    return `"${text.replace(/"/g, '""')}"`;
  };
  const csv = [headers, ...rows].map((row) => row.map(escape).join(",")).join("\r\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};