import React from "react";
import { useSelector } from "react-redux";

import { render, screen } from "@testing-library/react";
import { DisplayData } from "../DisplayData";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("DisplayData component", () => {
  beforeEach(() => {
    useSelector.mockClear();
  });

  it("should display form data from Redux store", () => {
    const mockState = {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      message: "Hello, this is a test message.",
    };

    useSelector.mockReturnValue(mockState);

    render(<DisplayData />);

    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("John")).toBeInTheDocument();

    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();

    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();

    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(
      screen.getByText("Hello, this is a test message.")
    ).toBeInTheDocument();
  });
});
