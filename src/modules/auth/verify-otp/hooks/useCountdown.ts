import { useCallback, useEffect, useState } from "react";

export function useCountdown(initial = 60) {
  const [seconds, setSeconds] = useState(initial);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const restart = useCallback(() => setSeconds(initial), [initial]);

  return { seconds, isDone: seconds <= 0, restart };
}