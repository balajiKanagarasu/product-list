import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductTableComponent from "@/components/ProductTableComponent";
import { fetchReviews } from "../src/services";

jest.mock("../src/services", () => ({
  fetchReviews: jest.fn(),
}));

test("renders ProductTableComponent", () => {
  render(<ProductTableComponent productsRes={[]} />);
});

test("renders ProductTableComponent with data", () => {
  const products = [
    {
      id: 1,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse with high precision tracking.",
      category: "Electronics",
      price: 29.99,
      discountPercentage: 10,
      rating: 4.5,
      stock: 150,
      tags: ["wireless", "ergonomic", "mouse"],
      brand: "TechGear",
    },
  ];
  render(<ProductTableComponent productsRes={products} />);

  fireEvent.click(screen.getByText("View Reviews"));
});

test("renders ProductTableComponent with data", () => {
  (fetchReviews as jest.Mock).mockRejectedValueOnce({
    response: {
      status: 500,
      data: {
        message: "Internal server error",
      },
    },
  });

  const products = [
    {
      id: 1,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse with high precision tracking.",
      category: "Electronics",
      price: 29.99,
      discountPercentage: 10,
      rating: 4.5,
      stock: 150,
      tags: ["wireless", "ergonomic", "mouse"],
      brand: "TechGear",
    },
  ];

  render(<ProductTableComponent productsRes={products} />);

  fireEvent.click(screen.getByText("View Reviews"));
});
