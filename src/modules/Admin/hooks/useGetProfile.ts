"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { GetProfile } from "../api/GetProfile";

const useGetProfile = () => {
  const { data, isPending, isError, refetch } = useApiQuery({
    queryFn: GetProfile,
    queryKey: ["profile"],
  });
  return {
    data,
    isPending,
    isError,
    refetch,
  };
};
export default useGetProfile;
