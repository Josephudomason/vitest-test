
import { render, screen } from '@testing-library/react'
import Greetings from "./Greetings";
import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom/vitest';


describe("Greetings", () => {
  it("renders a default greeting", () => {
    render(<Greetings name="" />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders greeting with a name", () => {
    render(<Greetings name="Joe" />);
    expect(screen.getByText("Hello Joe")).toBeInTheDocument();
  });
})