"use client";

import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

interface UseApiQueryProps<T> {
  queryKey: readonly unknown[];
  queryFn: () => Promise<T>;
  options?: Omit<UseQueryOptions<T, Error, T, readonly unknown[]>, "queryKey" | "queryFn">;
}

export function useApiQuery<T>({ queryKey, queryFn, options }: UseApiQueryProps<T>) {
  return useQuery<T, Error>({
    queryKey,
    queryFn,
    ...options,
  });
}
