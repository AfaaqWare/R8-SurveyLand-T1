"use client";

import { useRouter } from "next/navigation";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import { TokenService } from "@/services/tokenService";
import { signInApi, type SignInPayload, type SignInResponse } from "../api/signIn";

export function useSignIn() {
  const router = useRouter();

  return useApiMutation<SignInPayload, SignInResponse>({
    mutationFn: signInApi,
    options: {
      onSuccess: data => {
        TokenService.setToken(data.accessToken);
        router.push("/");
      },
    },
  });
}
