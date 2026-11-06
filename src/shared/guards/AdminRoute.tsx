
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import LoadingState from "@/core/ui-states/LoadingState";
import { TokenService } from "@/services/tokenService";
import useGetProfile from "@/modules/auth/hooks/useGetProfile";

export default function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { data, isLoading, isError } = useGetProfile();

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // 1. Check whether a token exists
    if (!TokenService.hasToken()) {
      router.replace("/sign-in");
      return;
    }

    // 2. Wait for the backend profile request
    if (isLoading) return;

    // 3. Reject an invalid or unavailable session
    if (isError || !data) {
      router.replace("/sign-in");
      return;
    }

    // 4. Check the actual user role returned by the API
    const role = data.role?.trim().toUpperCase();

    if (role === "ADMIN") {
      setIsAuthorized(true);
      return;
    }

    // 5. Regular users cannot access Admin Dashboard
    if (role === "USER") {
      router.replace("/dashboard");
      return;
    }

    // 6. Unknown roles are not authorized
    router.replace("/sign-in");
  }, [data, isLoading, isError, router]);

  if (!isAuthorized) return <LoadingState />;

  return <>{children}</>;
}
