"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { AlignLeft, CircleMinus, CirclePlus, List, X } from "@/assets/icons/icons";
import Button from "@/shared/components/atoms/Button";
import Checkbox from "@/shared/components/atoms/Checkbox";
import Input from "@/shared/components/atoms/Input";
import Text from "@/shared/components/atoms/Text";
import Title from "@/shared/components/atoms/Title";
import useAddQuestion from "@/modules/dashboard/hooks/useAddQuestion";
import QuestionTypeCard from "./QuestionTypeCard";

export type QuestionType = "mcq" | "textarea";

interface AddQuestionFormProps {
  id: string;
  onClose?: () => void;
}

interface ChoiceField {
  id: string;
  value: string;
}

interface FormErrors {
  questionText?: string;
  choices?: string;
}

const MIN_CHOICES = 2;

const initialChoices = (): ChoiceField[] => [
  { id: "choice-1", value: "" },
  { id: "choice-2", value: "" },
  { id: "choice-3", value: "" },
];

const AddQuestionForm = ({ id, onClose }: AddQuestionFormProps) => {
  const t = useTranslations("UserDashboard.addQuestion");
  const { mutate, isSaving } = useAddQuestion(id);
  const nextChoiceId = useRef(4);
  const [type, setType] = useState<QuestionType>("mcq");
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState<ChoiceField[]>(initialChoices);
  const [isRequired, setIsRequired] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});

  const selectType = (nextType: QuestionType) => {
    setType(nextType);
    setErrors(current => ({ ...current, choices: undefined }));
  };

  const updateChoice = (id: string, value: string) => {
    setChoices(current => current.map(choice => (choice.id === id ? { ...choice, value } : choice)));
    setErrors(current => ({ ...current, choices: undefined }));
  };

  const removeChoice = (id: string) => {
    setChoices(current => current.filter(choice => choice.id !== id));
  };

  const addChoice = () => {
    const id = `choice-${nextChoiceId.current}`;
    nextChoiceId.current += 1;
    setChoices(current => [...current, { id, value: "" }]);
  };

  const resetForm = () => {
    setType("mcq");
    setQuestionText("");
    setChoices(initialChoices());
    setIsRequired(true);
    setErrors({});
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSaving) return;

    const nextErrors: FormErrors = {};
    const text = questionText.trim();
    const filledChoices = choices.map(choice => choice.value.trim()).filter(Boolean);

    if (!text) nextErrors.questionText = t("errors.questionRequired");
    if (type === "mcq" && filledChoices.length < MIN_CHOICES) {
      nextErrors.choices = t("errors.choicesRequired");
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    mutate(
      {
        questionText: text,
        type,
        choices: type === "mcq" ? filledChoices : null,
        isRequired,
      },
      { onSuccess: resetForm }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="ds-bg ds-border-sm ds-rounded-2xl flex flex-col gap-5 p-5">
      <div className="flex items-center justify-between gap-3">
        <Title size="md" className="font-bold">
          {t("title")}
        </Title>
        <button
          type="button"
          onClick={onClose}
          aria-label={t("close")}
          className="ds-text-secondary inline-flex cursor-pointer items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ds-focus"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <Text size="sm" variant="secondary">
          {t("selectType")}
        </Text>
        <div className="grid grid-cols-2 gap-3">
          <QuestionTypeCard
            title={t("types.mcq.title")}
            subtitle={t("types.mcq.subtitle")}
            icon={List}
            selected={type === "mcq"}
            onSelect={() => selectType("mcq")}
          />
          <QuestionTypeCard
            title={t("types.textarea.title")}
            subtitle={t("types.textarea.subtitle")}
            icon={AlignLeft}
            selected={type === "textarea"}
            onSelect={() => selectType("textarea")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text size="sm" variant="secondary">
          {t("configure")}
        </Text>

        <Input
          label={t("questionText.label")}
          placeholder={t("questionText.placeholder")}
          value={questionText}
          onChange={event => {
            setQuestionText(event.target.value);
            setErrors(current => ({ ...current, questionText: undefined }));
          }}
          state={errors.questionText ? "error" : "default"}
          errorMessage={errors.questionText}
          labelClassName="!font-bold"
        />

        {type === "mcq" && (
          <div className="flex flex-col gap-3">
            <p className="ds-text-sm ds-text-primary font-medium">{t("choices")}</p>

            {choices.map((choice, index) => (
              <div key={choice.id} className="flex items-center gap-2">
                <div className="min-w-0 flex-1">
                  <Input
                    value={choice.value}
                    placeholder={t("choicePlaceholder", { number: index + 1 })}
                    aria-label={t("choicePlaceholder", { number: index + 1 })}
                    onChange={event => updateChoice(choice.id, event.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeChoice(choice.id)}
                  disabled={choices.length <= MIN_CHOICES}
                  aria-label={t("removeChoice", { number: index + 1 })}
                  className="ds-text-danger inline-flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <CircleMinus className="size-7" />
                </button>
              </div>
            ))}

            {errors.choices && (
              <p role="alert" className="ds-text-xs ds-text-danger">
                {errors.choices}
              </p>
            )}

            <button
              type="button"
              onClick={addChoice}
              className="ds-text-alt inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold"
            >
              <CirclePlus className="size-5" />
              {t("addChoice")}
            </button>
          </div>
        )}

        <Checkbox
          label={t("required")}
          checked={isRequired}
          onChange={event => setIsRequired(event.target.checked)}
        />
      </div>

      <Button type="submit" variant="primaryWhite" isFullWidth disabled={isSaving}>
        {isSaving ? t("saving") : t("save")}
      </Button>
    </form>
  );
};

export default AddQuestionForm;
