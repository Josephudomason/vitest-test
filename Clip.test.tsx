import { cleanup, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import { afterEach, describe, it, expect, vi } from "vitest"
import userEvent from '@testing-library/user-event'
import Clip from "./clip"

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})


describe("Clip", () => {
  it("users can type strings to the input tag", async () => {
    render(<Clip />)

    const input = screen.getByTestId("input-value") as HTMLInputElement

    await userEvent.type(input, "pedro")

    expect(input).toHaveValue("pedro")
  })



  it("click the button to display text on console", async () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => undefined)

    render(<Clip />)

    const input = screen.getByTestId("input-value")
    const button = screen.getByRole("button", { name: /send/i })

    await userEvent.type(input, "pedro")
    await userEvent.click(button)

    expect(consoleSpy).toHaveBeenCalledWith("pedro")
  })
})
