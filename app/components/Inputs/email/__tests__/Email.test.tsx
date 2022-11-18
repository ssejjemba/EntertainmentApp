import { EmailInput } from "../Email";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Errors from "~/constants/errors";

describe("Email component tests", () => {
  test("Email component renders successfully", () => {
    render(<EmailInput />);

    const inputElement = screen.getByTestId("email-input");

    expect(inputElement).toBeInTheDocument();

    const errorElement = screen.getByTestId("email-error");

    expect(errorElement).toBeInTheDocument();

    expect(errorElement.innerHTML).toBe("");
  });

  test("Will show as a required field, with an empty email error when first focused", () => {
    render(<EmailInput />);

    const inputElement = screen.getByTestId("email-input");

    fireEvent.focus(inputElement);

    const errorElement = screen.getByTestId("email-error");

    expect(errorElement).toBeInTheDocument();

    expect(errorElement.innerHTML).toBe(Errors.EMPTY_EMAIL);
  });

  test("Will show an invalid error message when user types in wrong email", async () => {
    render(<EmailInput />);

    const inputElement = screen.getByTestId("email-input");

    const errorElement = screen.getByTestId("email-error");

    const invalidEmail = "3dsjsemail.com";

    userEvent.type(inputElement, invalidEmail);

    await waitFor(() =>
      expect(errorElement.innerHTML).toBe(Errors.INVALID_EMAIL)
    );
  });

  test("Will show no error message as soon as a valid email is supplied", async () => {
    render(<EmailInput />);

    const inputElement = screen.getByTestId("email-input");

    const errorElement = screen.getByTestId("email-error");

    const emailPart1 = "dsjs";

    const emailPart2 = "@email.com";

    userEvent.type(inputElement, emailPart1);

    await waitFor(() =>
      expect(errorElement.innerHTML).toBe(Errors.INVALID_EMAIL)
    );

    userEvent.type(inputElement, emailPart2);

    await waitFor(() => expect(errorElement.innerHTML).toBe(Errors.NO_ERROR));
  });
});
