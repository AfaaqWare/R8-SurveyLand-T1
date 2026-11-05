"use client";

import { useLocale, useTranslations } from "next-intl";
import type { SurveyResponse } from "../../types/ResponsesTypes";
import { countAnswers, formatDateTime } from "../../utils/responsesUtils";
import AnswersBadge from "./AnswersBadge";
import CopyableId from "./CopyableId";
import RespondentCell from "./RespondentCell";
import RowActions from "./RowActions";

type Props = {
  rows: SurveyResponse[];
  startIndex: number;
  onView?: (response: SurveyResponse) => void;
};

const headCell =
  "px-4 py-3 text-start text-xs font-semibold tracking-wide text-[color:var(--color-text-secondary)]";

export default function ResponsesTable({ rows, startIndex, onView }: Props) {
  const t = useTranslations("responses.table");
  const locale = useLocale();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[920px] table-fixed border-collapse text-sm">
        <caption className="sr-only">{t("caption")}</caption>
        <colgroup>
          <col className="w-14" />
          <col className="w-[19%]" />
          <col className="w-[22%]" />
          <col className="w-44" />
          <col className="w-32" />
          <col className="w-48" />
          <col className="w-28" />
        </colgroup>

        <thead className="border-y border-[color:var(--border-color)] bg-[var(--color-bg-table)]">
          <tr>
            <th scope="col" className={headCell}>{t("id")}</th>
            <th scope="col" className={headCell}>{t("respondent")}</th>
            <th scope="col" className={headCell}>{t("email")}</th>
            <th scope="col" className={headCell}>{t("surveyId")}</th>
            <th scope="col" className={headCell}>{t("answers")}</th>
            <th scope="col" className={headCell}>{t("submittedAt")}</th>
            <th scope="col" className={headCell}>{t("actions")}</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[color:var(--border-color)]">
          {rows.map((response, index) => (
            <tr
              key={response.id}
              className="transition-colors hover:bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]"
            >
              <td className="px-4 py-3 text-[color:var(--color-text-secondary)] tabular-nums">
                {startIndex + index + 1}
              </td>
              <td className="px-4 py-3">
                <RespondentCell name={response.respondentName} />
              </td>
              <td className="px-4 py-3">
                {response.respondentEmail ? (
                  <span
                    className="block truncate text-[color:var(--color-text-primary)]"
                    title={response.respondentEmail}
                  >
                    {response.respondentEmail}
                  </span>
                ) : (
                  <span className="text-[color:var(--color-text-disabled)]">{t("noEmail")}</span>
                )}
              </td>
              <td className="px-4 py-3">
                <CopyableId id={response.surveyId} />
              </td>
              <td className="px-4 py-3">
                <AnswersBadge count={countAnswers(response)} />
              </td>
              <td className="px-4 py-3 text-xs text-[color:var(--color-text-primary)] tabular-nums">
                {formatDateTime(response.submittedAt, locale)}
              </td>
              <td className="px-4 py-3">
                <RowActions response={response} onView={onView} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}