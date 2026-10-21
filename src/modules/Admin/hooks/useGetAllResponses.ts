"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getAllResponses } from "../api/getAllResponses";
import { ResponsesApiResponse } from "../types/DashboardTypes";

const useGetAllResponses = () => {
  const {
    data: responsesData,
    isPending: ResponsePending,
    refetch: responseRefetch,
    isError: responseError,
  } = useApiQuery<ResponsesApiResponse>({
    queryFn: getAllResponses,
    queryKey: ["responses", "list"],
  });
  const responses = responsesData?.data ?? [];
  const totalResponses = responses.length;

  return {
    responses,
    totalResponses,
    isPending: ResponsePending,
    refetch: responseRefetch,
    isError: responseError,
  };
};

export default useGetAllResponses;
