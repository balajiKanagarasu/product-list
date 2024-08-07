import React from "react";
import { render } from "@testing-library/react";
import ProductsPage from "@/app/(app)/products/page";
import { getProductDetails } from "../src/services";

jest.mock("../src/services", () => ({
  getProductDetails: jest.fn(),
}));

describe("ProductsPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders ProductTableComponent with products on successful fetch", async () => {
    const mockProducts = [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
    ];

    // Type assertion for the mock function
    (getProductDetails as jest.Mock).mockResolvedValueOnce(mockProducts);

    render(await ProductsPage());
  });

  test("renders ProductTableComponent with error message on failed fetch", async () => {
    const mockError = [{ message: "Failed to fetch products" }];

    // Type assertion for the mock function
    (getProductDetails as jest.Mock).mockResolvedValueOnce(mockError);

    render(await ProductsPage());
  });
});
