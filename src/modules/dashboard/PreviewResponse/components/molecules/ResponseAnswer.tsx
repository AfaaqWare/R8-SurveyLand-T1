import Icon from "@/shared/components/atoms/Icon";
import Title from "@/shared/components/atoms/Title";
import { Info } from "@/assets/icons/icons";
import { useTranslations } from "next-intl";
import type { SurveyQuestion } from "@/modules/dashboard/types/UpdateSurveyType";
import Text from "@/shared/components/atoms/Text";
import TextArea from "@/shared/components/atoms/TextArea";

interface ResponseAnswerProps {
  questions: SurveyQuestion[];
  answers: Record<string, string>;
}

const ResponseAnswer = ({ questions, answers }: ResponseAnswerProps) => {
  const t = useTranslations("mySurveys.UserDashboard.previewResponse.answers");

  return (
    <div className="ds-border-card ds-bg-card flex min-w-0 flex-col gap-5 p-4 shadow-none">
      <div className="flex items-center gap-3">
        <Icon IconComponent={Info} variant="teal" size="sm" />
        <Title size="md">{t("title")}</Title>
      </div>

      <div className="flex flex-col gap-5">
        {questions.map((question, index) => {
          const answer = answers[question.qid];

          return (
            <div key={question.qid} className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <span className="ds-bg-primary ds-text-white flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold">
                  {index + 1}
                </span>

                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <Text variant="secondary">
                    {question.questionText}
                    {question.isRequired && <span className="ds-text-danger ms-1">*</span>}
                  </Text>

                  {question.type === "mcq" ? (
                    <div className="flex flex-col gap-2">
                      {(question.choices ?? []).map(choice => (
                        <label key={choice} className="flex items-center gap-2">
                          <input
                            type="radio"
                            checked={answer?.trim() === choice.trim()}
                            readOnly
                            disabled
                            className="accent-(--color-primary)"
                          />

                          <Text variant="secondary">{choice}</Text>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <TextArea
                      value={answer ?? ""}
                      readOnly
                      rows={4}
                      disabled
                      className="ds-border-card ds-bg-card"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponseAnswer;
