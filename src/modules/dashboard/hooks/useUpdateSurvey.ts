"use client";
import useGetSurvey from "./useGetSurvey";
import type { IdProps, UpdateSurveyProps } from "../types/UpdateSurveyType";
import useSaveSurvey from "./useSaveSurvey";
import useSurveyForm from "./useSurveyForm";

const useUpdateSurvey = ({ id }: IdProps) => {
  const { data, isPending, isError, refetch } = useGetSurvey({ id });
  const { handleSubmit, ...form } = useSurveyForm(data);
  const { mutate, isSaving } = useSaveSurvey(id);

  const onSubmit = handleSubmit(values => {
    const payload: UpdateSurveyProps = {
      title: values.title,
      description: values.description,
      deadline: `${values.deadline}:59Z`,
      status: values.status,
    };
    mutate(payload);
  });

  return {
    control: form.control,
    register: form.register,
    cover: data?.cover,
    isLoading: isPending,
    isError,
    refetch,
    onSubmit,
    isDirty: form.isDirty,
    reset: form.reset,
    isSaving,
    disableSave: form.disableSave,
    errors: form.errors,
  };
};

export default useUpdateSurvey;
