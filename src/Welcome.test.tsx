import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest"
import Welcome from "./Welcome";


describe("Welcome", () => {
  it("display message without a prop", () => {
    render(<Welcome name={''} />)

    expect(screen.getByText("Welcome there")).toBeInTheDocument();
  })

  it("renders message with props", () => {
    render(<Welcome name={"Banty"} />);

    const display = screen.getByText("Welcome Banty");

    expect(display).toBeInTheDocument();
  })
})