import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCategoryRow from "./productCategoryRow";

describe("Product category row", () => {
  it("rendering product category", () => {
    const productCategory = "Fruits";
    render(<ProductCategoryRow category={productCategory} />);

    expect(screen.getByText(/Fruits/)).toBeInTheDocument();
  });
});
