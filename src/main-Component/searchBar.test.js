import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SearchBar from "./searchBar";

describe("SearchBar", () => {
  test("renders with initial values", () => {
    const filterText = "initial text";
    const inStockOnly = true;

    render(
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={() => {}}
        onInStockOnlyChange={() => {}}
      />
    );

    // Assert that the input and checkbox have the correct initial values
    expect(screen.getByPlaceholderText("Search...")).toHaveValue(filterText);
    expect(screen.getByLabelText(/Only show products in stock/)).toBeChecked();
  });

  test("calls onFilterTextChange when text is typed", () => {
    const onFilterTextChangeMock = jest.fn();
    render(
      <SearchBar
        filterText=""
        inStockOnly={true}
        onFilterTextChange={onFilterTextChangeMock}
        onInStockOnlyChange={() => {}}
      />
    );

    // Type into the text input
    // const input = screen.getByPlaceholderText("Search...");
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new text" } });

    // Assert that the onFilterTextChange function is called with the correct value
    expect(onFilterTextChangeMock).toHaveBeenCalledWith("new text");
  });

  test("calls onInStockOnlyChange when checkbox is clicked", () => {
    const onInStockOnlyChangeMock = jest.fn();
    render(
      <SearchBar
        filterText=""
        inStockOnly={false}
        onFilterTextChange={() => {}}
        onInStockOnlyChange={onInStockOnlyChangeMock}
      />
    );

    // Click on the checkbox
    const checkbox = screen.getByLabelText(/Only show products in stock/);
    fireEvent.click(checkbox);

    // Assert that the onInStockOnlyChange function is called with the correct value
    expect(onInStockOnlyChangeMock).toHaveBeenCalledWith(true);
  });
});
