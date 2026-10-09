"use client";
import { useMutation, type UseMutationOptions } from "@tanstack/react-query";

interface UseApiMutationProps<TPayload, TResponse, TError> {
  mutationFn: (payload: TPayload) => Promise<TResponse>;
  options?: Omit<UseMutationOptions<TResponse, TError, TPayload>, "mutationFn">;
}

export function useApiMutation<TPayload, TResponse, TError = Error>({
  mutationFn,
  options,
}: UseApiMutationProps<TPayload, TResponse, TError>) {
  return useMutation<TResponse, TError, TPayload>({
    mutationFn,
    ...options,
  });
}
