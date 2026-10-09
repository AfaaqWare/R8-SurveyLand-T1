"use client";

import { type ReactNode, useEffect, useState } from "react";
import LoadingState from "@/core/ui-states/LoadingState";
import { TokenService } from "@/services/tokenService";

interface AuthInitializerProps {
  children: ReactNode;
}

export default function AuthInitializer({ children }: AuthInitializerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = TokenService.getToken();

    if (token) {
      try {
        JSON.parse(atob(token.split(".")[1]));
      } catch {
        TokenService.removeToken();
      }
    }

    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingState />;

  return <>{children}</>;
}
