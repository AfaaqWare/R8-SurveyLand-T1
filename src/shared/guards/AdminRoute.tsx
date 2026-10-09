"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ENV } from "@/config/env";
import { TokenService } from "@/services/tokenService";

const ADMIN_ROLE = "ADMIN";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (ENV.DISABLE_DASHBOARD_PROTECTION) {
      setIsAuthorized(true);
      return;
    }

    const token = TokenService.getToken();
    if (!token) {
      router.replace("/sign-in");
      setIsAuthorized(false);
      return;
    }

    // TODO: fetch the user's profile and verify the role:
    //   const role = await getProfileRole();
    //   if (role !== ADMIN_ROLE) router.replace("/dashboard");
    void ADMIN_ROLE;
    setIsAuthorized(true);
  }, [router]);

  if (isAuthorized === null || !isAuthorized) return null;

  return <>{children}</>;
}
