import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("DashboardIndexPage", () => {
  it("renders the heading", () => {
    render(<Home />);
    const header = screen.getByRole("heading", {
      name: "Jest Testing",
    });
    expect(header).toBeInTheDocument();
  });

  it("renders the username input field", () => {
    render(<Home />);
    const input = screen.getByPlaceholderText("Enter your username");
    expect(input).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Home />);
    const button = screen.getByRole("button", {
      name: "Submit",
    });
    expect(button).toBeInTheDocument();
  });
});
