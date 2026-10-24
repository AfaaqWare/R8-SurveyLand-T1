"use client";
import useGetSurvey from "./useGetSurvey";
import type { IdProps, UpdateSurveyProps } from "../types/UpdateSurveyType";
import useSaveSurvey from "./useSaveSurvey";
import useSurveyForm from "./useSurveyForm";
import { isAxiosError } from "axios";

const useUpdateSurvey = ({ id }: IdProps) => {
  const { data, isPending, isError, refetch, error } = useGetSurvey({ id });
  const { handleSubmit, ...form } = useSurveyForm(data);
  const { mutate, isSaving } = useSaveSurvey(id);

  const isNotFound = isAxiosError(error) && error.response?.status === 404;

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
    isNotFound,
  };
};

export default useUpdateSurvey;
