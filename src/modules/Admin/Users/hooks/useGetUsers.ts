"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getUsers } from "../api/getUsers";
import { AdminUser } from "../types/UsersTypes";

export const USERS_QUERY_KEY = ["users", "list"];

const useGetUsers = () => {
  const { data, isPending, isError, refetch } = useApiQuery<AdminUser[]>({
    queryFn: getUsers,
    queryKey: USERS_QUERY_KEY,
  });

  return {
    users: data ?? [],
    isPending,
    isError,
    refetch,
  };
};

export default useGetUsers;
