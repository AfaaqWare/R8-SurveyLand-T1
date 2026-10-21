import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/shared/components/molecules/Table";
import { Card } from "@/shared/components/atoms/Card";
import { useTranslations } from "next-intl";
import CardHeader from "../molecules/CardHeader";
import type { SurveyResponse } from "../../types/DashboardTypes";
import { ErrorState } from "@/core/ui-states";
interface DashBoardTableProps {
  responses: SurveyResponse[];
  isError?: boolean;
  onRetry?: () => void;
}

const DashBoardTable = ({ responses, isError, onRetry }: DashBoardTableProps) => {
  const t = useTranslations("dashboard.home");
  const recentResponses = responses.slice(0, 4);

  return (
    <Card className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-3 p-4 shadow-none">
      <CardHeader
        title={t("recentSurveys")}
        actionLabel={t("viewAll")}
        actionHref="/admin/responses"
      />
      {isError ? (
        <div className="flex min-h-72 w-full items-center justify-center">
          <ErrorState onRetry={onRetry} className="min-h-0 w-full" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table className="w-full min-w-120 text-start">
            <TableHeader>
              <TableRow className="ds-text-secondary ds-border-color ds-text-xs">
                <TableHead>{t("columns.surveyTitle")}</TableHead>
                <TableHead>{t("columns.email")}</TableHead>
                <TableHead>{t("columns.answers")}</TableHead>
                <TableHead>{t("columns.submittedAt")}</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentResponses.map(response => (
                <TableRow key={response.id} className="ds-border-color">
                  <TableCell>{response.respondentName.trim() || "Anonymous"}</TableCell>
                  <TableCell>{response.respondentEmail || "No email"}</TableCell>
                  <TableCell>{Object.keys(response.answers).length}</TableCell>
                  <TableCell>{new Date(response.submittedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};

export default DashBoardTable;
