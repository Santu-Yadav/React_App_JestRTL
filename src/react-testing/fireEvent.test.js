import FireEventComponent from "./fireEvent";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("react testing using jest and RTL", () => {
  it("first test", async () => {
    render(<FireEventComponent />);

    await screen.findByText(/Signed in as/);

    screen.debug();

    expect(screen.queryByText(/Searches for javascript/)).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "javascript" },
    });

    expect(screen.getByText(/Searches for javascript/)).toBeInTheDocument();
    screen.debug();
  });
});
