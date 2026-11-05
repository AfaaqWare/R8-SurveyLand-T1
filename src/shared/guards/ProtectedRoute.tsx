
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import LoadingState from "@/core/ui-states/LoadingState";
import { TokenService } from "@/services/tokenService";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { data, isLoading, isError } = useGetProfile();

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // 1. Check authentication
    if (!TokenService.hasToken()) {
      setIsAuthorized(false);
      router.replace("/sign-in");
      return;
    }

    // 2. Wait until the profile request finishes
    if (isLoading) return;

    // 3. Reject invalid sessions
    if (isError || !data) {
      setIsAuthorized(false);
      router.replace("/sign-in");
      return;
    }

    // 4. Check the verified user role
    const role = data.role?.trim().toUpperCase();

    // 5. Allow regular users
    if (role === "USER") {
      setIsAuthorized(true);
      return;
    }

    // 6. Redirect Admin users
    setIsAuthorized(false);

    if (role === "ADMIN") {
      router.replace("/admin");
      return;
    }

    // 7. Reject unknown roles
    router.replace("/sign-in");

  }, [data, isLoading, isError, router]);

  // Show loading while checking authentication
  if (isLoading || !isAuthorized) {
    return <LoadingState />;
  }

  return <>{children}</>;
}
