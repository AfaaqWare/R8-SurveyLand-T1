"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { UserStatsApi } from "../api/UserStatsApi";
import type { UsersApiResponse } from "../types/DashboardTypes";

const useStatsNumber = (enabled = true) => {
  const { data, isPending, isError, refetch } = useApiQuery<UsersApiResponse>({
    queryFn: UserStatsApi,
    queryKey: ["users", "list"],
    options: { enabled },
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
