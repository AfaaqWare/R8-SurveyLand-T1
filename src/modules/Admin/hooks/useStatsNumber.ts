"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { UserStatsApi } from "../api/UserStatsApi";
import type { UsersApiResponse } from "../types/DashboardTypes";

const useStatsNumber = () => {
  const { data, isPending, isError, refetch } = useApiQuery<UsersApiResponse>({
    queryFn: UserStatsApi,
    queryKey: ["users", "list"],
  });
  const totalUsers = data?.length ?? 0;
  return {
    totalUsers,
    isPending,
    isError,
    refetch,
  };
};
export default useStatsNumber;
