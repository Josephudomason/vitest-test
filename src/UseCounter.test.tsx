import { act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UseCounter } from "./UseCounter";


describe('UseCounter', () => {
  it("initial value is 5", () => {
    const { result } = renderHook(() => UseCounter(5))

    expect(result.current.count).toBe(5)
  });

  it("increments the count", () => {
    const { result } = renderHook(() => UseCounter(0))

    act(() => {
      result.current.Increment()
    })

    expect(result.current.count).toBe(1)
  });

  it("decrements the count", () => {
    const { result } = renderHook(() => UseCounter(2))

    act(() => {
      result.current.Decrement()
    })

    expect(result.current.count).toBe(1)
  });

})
