import { renderHook, act } from "@testing-library/react";
import '@testing-library/jest-dom'
import { useIntervalTime } from "./index";

test("useIntervalTime()", () => {
  const interval = 1000;
  jest.useFakeTimers();
  const { result } = renderHook(() => useIntervalTime(interval));

  const time = result.current;

  act(() => {
    jest.advanceTimersByTime(interval);
  });

  const nextTime = result.current;

  expect(nextTime.getTime() - time.getTime()).toBe(interval);

  jest.useRealTimers();
});
