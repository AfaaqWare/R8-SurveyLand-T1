"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import { getProfileApi } from "../api/getProfile";

const useGetProfile = () => {
  return useApiQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
  });
};

export default useGetProfile;
