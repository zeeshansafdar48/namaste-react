import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page", () => {
  it("should render Contact Us", () => {
    // rendering
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should check button on Contact Us", () => {
    // rendering
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });
});
