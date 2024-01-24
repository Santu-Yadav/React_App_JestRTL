import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductRow from "./productRow";

describe("Product Row", () => {
  it(" render product name ", () => {
    const productData = {
      name: "apple - out of stock",
      price: 20,
      stocked: false,
    };
    render(<ProductRow product={productData} />);

    const nameElement = screen.getByText("apple - out of stock");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveStyle({ color: "red" });
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  it(" render product name ", () => {
    const productData = {
      name: "orange",
      price: 20,
      stocked: true,
    };
    render(<ProductRow product={productData} />);

    expect(screen.getByText("orange")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});
