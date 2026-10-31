import { useTranslations } from "next-intl";
import TextArea from "@/shared/components/atoms/TextArea";
import { PreviewQuestion } from "@/modules/dashboard/types/PreviewType";

interface QuestionItemProps {
  number: number;
  question: PreviewQuestion;
}

const QuestionItem = ({ number, question }: QuestionItemProps) => {
  const t = useTranslations("UserDashboard.previewSurvey");

  const questionTitle = (
    <>
      {question.questionText}
      {question.isRequired && (
        <span className="ds-text-danger ms-1" aria-hidden="true">
          *
        </span>
      )}
    </>
  );

  return (
    <div className="ds-border-card ds-bg-card ds-rounded-lg flex items-start gap-3 p-4">
      <span className="ds-bg-primary ds-text-white ds-text-xs flex size-6 shrink-0 items-center justify-center rounded-md font-bold">
        {number}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {question.type === "mcq" ? (
          <div role="radiogroup" className="flex flex-col gap-3">
            <p className="ds-text-sm ds-text-primary text-start leading-6 font-bold">
              {questionTitle}
            </p>

            <div className="flex flex-col gap-2">
              {(question.choices ?? []).map((choice, index) => (
                <label
                  key={`${index}-${choice}`}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    name={question.qid}
                    value={choice.trim()}
                    className="accent-(--color-primary)"
                  />
                  <span className="ds-text-xs ds-text-primary">{choice.trim()}</span>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <>
            <label
              htmlFor={question.qid}
              className="ds-text-sm ds-text-primary text-start leading-6 font-bold"
            >
              {questionTitle}
            </label>

            <TextArea
              id={question.qid}
              rows={3}
              placeholder={t("textPlaceholder")}
              className="ds-border-color! w-full"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionItem;
