import { useTranslations } from "next-intl";
import TextArea from "@/shared/components/atoms/TextArea";
import type { PreviewQuestion } from "../../../types/PreviewType";

const MAX_LENGTH = 500;

interface AnswerItemProps {
  number: number;
  question: PreviewQuestion;
  length: number;
}

const AnswerItem = ({ number, question, length }: AnswerItemProps) => {
  const t = useTranslations("UserDashboard.editResponse");

  return (
    <div className="flex items-start gap-3">
      <span className="ds-bg-primary ds-text-white ds-text-xs flex size-6 shrink-0 items-center justify-center rounded-md font-bold">
        {number}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <p className="ds-text-sm ds-text-primary text-start leading-6 font-medium">
          {question.questionText}
          {question.isRequired && (
            <span className="ds-text-danger ms-1" aria-hidden="true">
              *
            </span>
          )}
        </p>

        {question.type === "mcq" ? (
          <div role="radiogroup" className="flex flex-col gap-2">
            {(question.choices ?? []).map((choice, index) => (
              <label key={`${index}-${choice}`} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  value={choice.trim()}
                  className="accent-(--color-primary)"
          
                />
                <span className="ds-text-xs ds-text-primary">{choice.trim()}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <TextArea
              rows={4}
              maxLength={MAX_LENGTH}
              placeholder={t("answers.placeholder")}
              aria-label={question.questionText}
              className="ds-border-color! w-full"
       
            />

            <p className="ds-text-xs ds-text-secondary text-end">
              {length}/{MAX_LENGTH}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AnswerItem;
