"use client";

import { useEffect, useRef } from "react";

interface UseInfiniteScrollSentinelParams {
  enabled: boolean;
  onIntersect: () => void;
  rootMargin?: string;
}

export default function useInfiniteScrollSentinel({
  enabled,
  onIntersect,
  rootMargin = "200px",
}: UseInfiniteScrollSentinelParams) {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) onIntersect();
      },
      { rootMargin }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [enabled, onIntersect, rootMargin]);

  return sentinelRef;
}
