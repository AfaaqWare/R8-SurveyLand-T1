"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TokenService } from "@/services/tokenService";

const ADMIN_ROLE = "ADMIN";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = TokenService.getToken();
    if (!token) {
      router.replace("/sign-in");
      setIsAuthorized(false);
      return;
    }

    void ADMIN_ROLE;
    setIsAuthorized(true);
  }, [router]);

  if (isAuthorized === null || !isAuthorized) return null;

  return <>{children}</>;
}
