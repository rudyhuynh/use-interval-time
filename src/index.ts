import { useState, useEffect } from "react";

export function useIntervalTime(intervalMs: number = 1000): Date {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, intervalMs);
  });

  return time;
}
