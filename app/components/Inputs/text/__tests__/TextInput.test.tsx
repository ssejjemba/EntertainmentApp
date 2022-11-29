import { TextInput } from "../TextInput";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Email component tests", () => {
  test("Email component renders successfully", () => {
    render(<TextInput />);

    const inputElement = screen.getByTestId("text-input");

    expect(inputElement).toBeInTheDocument();

    const errorElement = screen.getByTestId("input-error");

    expect(errorElement).toBeInTheDocument();

    expect(errorElement.innerHTML).toBe("");
  });

  test("Will run validations on focus", async () => {
    const validateFunction = jest.fn().mockImplementation((text: string) => {
      return "some error";
    });
    render(<TextInput validationFn={validateFunction} />);

    const inputElement = screen.getByTestId("text-input");

    fireEvent.focus(inputElement);

    const errorElement = screen.getByTestId("input-error");

    expect(errorElement).toBeInTheDocument();

    expect(validateFunction).toBeCalledTimes(1);
    await waitFor(() => expect(errorElement.innerHTML).toBe("some error"));
  });

  test("Will run validations as user types changes", async () => {
    const validateFunction = jest.fn().mockImplementation((text: string) => {
      return "some error";
    });
    render(<TextInput validationFn={validateFunction} />);

    const inputElement = screen.getByTestId("text-input");

    const errorElement = screen.getByTestId("input-error");

    userEvent.type(inputElement, "anything");

    expect(validateFunction).toBeCalledTimes(0);

    expect(errorElement).toBeInTheDocument();

    await waitFor(() => expect(errorElement.innerHTML).toBe("some error"));
  });
});
