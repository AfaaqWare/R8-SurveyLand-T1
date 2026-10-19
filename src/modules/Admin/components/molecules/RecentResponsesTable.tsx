import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/shared/components/molecules/Table";
import CardHeader from "../molecules/CardHeader";
import { Card } from "@/shared/components/atoms/Card";
import { useTranslations } from "next-intl";
import type { Survey } from "../../types/DashboardTypes";
import TableMessage from "./TableMessage";

interface RecentResponsesTableProps {
  surveys: Survey[];
  isError?: boolean;
  onRetry?: () => void;
}
const RecentResponsesTable = ({ surveys, isError = false, onRetry }: RecentResponsesTableProps) => {
  const t = useTranslations("dashboard.home");

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-3 p-4 shadow-none">
      <CardHeader
        title={t("recentSurveys")}
        actionLabel={t("viewAll")}
        actionHref="/admin/surveys"
      />

      <div className="overflow-x-auto">
        <Table className="w-full min-w-120 text-start">
          <TableHeader>
            <TableRow className="ds-text-secondary ds-border-color ds-text-xs">
              <TableHead className="pb-2 font-medium">{t("columns.surveyTitle")}</TableHead>
              <TableHead className="pb-2 font-medium">{t("columns.status")}</TableHead>
              <TableHead className="pb-2 font-medium">{t("columns.respondent")}</TableHead>
              <TableHead className="pb-2 font-medium">{t("columns.submittedAt")}</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {surveys.slice(0, 4).map(survey => {
              return (
                <TableRow key={survey.id} className="ds-border-color">
                  <TableCell>{survey.title || "Untitled survey"}</TableCell>
                  <TableCell>{survey.status || "Unknown"}</TableCell>
                  <TableCell>{survey.questions?.length ?? 0}</TableCell>
                  <TableCell>{new Date(survey.updatedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              );
            })}

            {isError && (
              <TableMessage
                colSpan={4}
                isError
                message={t("error")}
                retryLabel={t("retry")}
                onRetry={onRetry}
              />
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default RecentResponsesTable;
