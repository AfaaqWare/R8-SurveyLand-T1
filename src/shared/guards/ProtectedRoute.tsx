"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TokenService } from "@/services/tokenService";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = TokenService.getToken();

    if (!token) {
      router.replace("/sign-in");
      setAuthorized(false);
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (authorized === null) return null;

  if (authorized === false) return null;

  return <>{children}</>;
}
