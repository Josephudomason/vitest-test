import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import UserProfile from "./UserProfile";
import "@testing-library/jest-dom/vitest"

describe("UserProfile", () => {
  let fetchMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    fetchMock = vi.fn()
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  afterEach(() => {
    vi.resetAllMocks()
  })


  it("fetch and displays the user data", async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ id: 1, name: "john", email: "john@gmail.com" })
    })
    render(<UserProfile userId={1} />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/^john$/i)).toBeInTheDocument();
      // expect(screen.getByText("john")).toBeInTheDocument();

      expect(screen.getByText(/john@gmail.com/i)).toBeInTheDocument();
    })
  })
})
