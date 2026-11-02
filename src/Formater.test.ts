import { Formater } from "./Formater"
import { describe, it, expect } from "vitest"


describe("Formater", () => {
  it("converts number to k", () => {
    expect(Formater(500)).toBe("500");
  });

  it("converts numbers in the thousands into k", () => {
    expect(Formater(1200)).toBe("1.2k");
  });

  it("converts numbers in the millions into M", () => {
    expect(Formater(2_500_000)).toBe("2.5M");
  });

  it("converts 1000", () => {
    expect(Formater(1000)).toBe("1.0k");
  });
})