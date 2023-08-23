import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import { MessageForm } from "../MessageForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

window.alert = jest.fn();

describe("MessageForm", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should disable submit button initially", () => {
    render(<MessageForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  it("should validate first_name as required", async () => {
    render(<MessageForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.focus(firstNameInput);
    fireEvent.blur(firstNameInput);
    expect(await screen.findByText("First name is required")).toBeTruthy();
  });

  it("should validate last_name as required", async () => {
    render(<MessageForm />);
    const lastNameInput = screen.getByLabelText(/last name/i);
    fireEvent.focus(lastNameInput);
    fireEvent.blur(lastNameInput);
    expect(await screen.findByText("Last name is required")).toBeTruthy();
  });

  it("should validate email as required", async () => {
    render(<MessageForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.focus(emailInput);
    fireEvent.blur(emailInput);
    expect(await screen.findByText("Email is required")).toBeTruthy();
  });

  it("should validate email format", async () => {
    render(<MessageForm />);
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.focus(emailInput);
    fireEvent.input(emailInput, {
      target: { value: "invalidEmail" },
    });
    fireEvent.blur(emailInput);
    expect(await screen.findByText("Invalid email address")).toBeTruthy();
  });

  it("should validate message min length", async () => {
    render(<MessageForm />);

    const messageInput = screen.getByLabelText(/message/i);
    fireEvent.focus(messageInput);
    fireEvent.input(messageInput, {
      target: { value: "short" },
    });
    fireEvent.blur(messageInput);
    expect(
      await screen.findByText("Message should be at least 10 characters")
    ).toBeTruthy();
  });

  it("should enable submit button when all validations pass", () => {
    render(<MessageForm />);
    fireEvent.input(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByLabelText(/message/i), {
      target: { value: "Hello, this is a test message." },
    });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).not.toBeDisabled();
  });

  it("should dispatch action with form data when submit button clicked", () => {
    render(<MessageForm />);

    fireEvent.input(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.input(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.input(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.input(screen.getByLabelText(/message/i), {
      target: { value: "Hello, this is a test message." },
    });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SUBMIT_FORM",
      payload: {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        message: "Hello, this is a test message.",
      },
    });
  });
});
