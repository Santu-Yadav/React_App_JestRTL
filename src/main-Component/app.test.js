import { render, screen } from "@testing-library/react";
import AppMain from "./app";
import "@testing-library/jest-dom";

describe("app", () => {
  it("render with data", () => {
    const PRODUCTS = [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    ];

    render(<AppMain products={PRODUCTS} />);
    screen.debug();

    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Vegetables")).toBeInTheDocument();
    expect(screen.getByText("Spinach")).toBeInTheDocument();
  });
});
