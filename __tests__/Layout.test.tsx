import React from "react";
import { render } from "@testing-library/react";
import Layout from "@/app/(app)/layout";
import { useRouter } from "next/navigation";

// Mock the `useRouter` hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Layout Component", () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      replace: mockReplace,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("redirects to login if token is not present in localStorage", async () => {
    // Mock localStorage.getItem to return null
    const originalGetItem = Storage.prototype.getItem;
    Storage.prototype.getItem = jest.fn(() => null);

    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Restore localStorage.getItem
    Storage.prototype.getItem = originalGetItem;
  });

  test("renders children if token is present in localStorage", () => {
    // Mock localStorage.getItem to return a token
    const originalGetItem = Storage.prototype.getItem;
    Storage.prototype.getItem = jest.fn(() => "mockToken");

    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    // Restore localStorage.getItem
    Storage.prototype.getItem = originalGetItem;
  });
});

