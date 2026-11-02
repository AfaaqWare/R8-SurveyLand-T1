"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

import { IdProps } from "../types/UpdateSurveyType";
import { getPreviewResponse } from "../api/getpreviewResponse";
import { isAxiosError } from "axios";

const useGetPreviewResponse = ({ id }: IdProps) => {
  const {
    data: previewInfo,
    isLoading,
    isError,
    error,
    refetch,
  } = useApiQuery({
    queryKey: ["responses", id],
    queryFn: () => getPreviewResponse({ id }),
    options: {
      enabled: !!id,
      retry: false,
    },
  });

  const notFound = isAxiosError(error) && error.response?.status === 500;

  return { data: previewInfo, isLoading, isError, error, refetch, notFound };
};

export default useGetPreviewResponse;
