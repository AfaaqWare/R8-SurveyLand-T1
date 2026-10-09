"use client";

import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 1024px)";

export default function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(DESKTOP_QUERY);
    setIsDesktop(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => setIsDesktop(event.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
}
