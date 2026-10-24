import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateSurveySchema, UpdateSurveyValues } from "../schema/UpdateSurveySchema";
import type { SurveyResponse } from "../types/UpdateSurveyType";

const useSurveyForm = (data?: SurveyResponse) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<UpdateSurveyValues>({
    resolver: zodResolver(UpdateSurveySchema),
    defaultValues: {
      title: "",
      description: "",
      deadline: "",
      status: "draft",
    },
    values: data
      ? {
          title: data.title,
          description: data.description ?? "",
          deadline: data.deadline.slice(0, 16),
          status: data.status,
        }
      : undefined,
    mode: "onChange",
  });

  const disableSave = !isDirty || !isValid;

  return { control, register, handleSubmit, reset, errors, isDirty, disableSave };
};

export default useSurveyForm;
