import { useTranslations } from "next-intl";
import { CalendarDays, ClipboardList, Lock } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import { Card } from "@/shared/components/atoms/Card";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import QuestionItem from "./QuestionItem";
import { PreviewQuestion } from "@/modules/dashboard/types/PreviewType";
import InfoChip from "./InfoChip";

interface PreviewQuestionsProps {
  title: string;
  description: string | null;
  deadline: string;
  questions: PreviewQuestion[];
}

const PreviewQuestions = ({ title, description, deadline, questions }: PreviewQuestionsProps) => {
  const t = useTranslations("UserDashboard.previewSurvey");

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <Card className="ds-border-card ds-bg-card relative flex min-w-0 flex-col gap-5 p-4 pt-10 shadow-none">
        <div className="absolute inset-x-0 top-0 flex h-0 items-center justify-center">
          <span className="ds-bg-primary absolute h-1 w-full" />

          <span className="ds-primary-200 ds-text-alt relative z-10 flex size-9 items-center justify-center rounded-full">
            <ClipboardList className="size-5" />
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <Title size="md">{title}</Title>

          {description && (
            <Text size="sm" variant="secondary">
              {description}
            </Text>
          )}

          <div className="flex flex-wrap justify-center gap-2">
            <InfoChip
              icon={CalendarDays}
              text={t("deadline", {
                date: new Date(deadline).toLocaleDateString(),
              })}
            />
          </div>
        </div>

        {questions.map((question, index) => (
          <QuestionItem key={question.qid} number={index + 1} question={question} />
        ))}

        {questions.length === 0 && (
          <Card className="ds-border-card ds-bg-card">
            <Text size="sm" variant="secondary" isCenter>
              {t("noQuestions")}
            </Text>
          </Card>
        )}
      </Card>

      {questions.length ? (
        <div className="flex flex-col items-center gap-2">
          <Button variant="primaryWhite" size="md">
            {t("submit")}
          </Button>

          <Text className="ds-text-xs ds-text-secondary flex items-center gap-1">
            <Lock className="size-3.5" />
            {t("secure")}
          </Text>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PreviewQuestions;
