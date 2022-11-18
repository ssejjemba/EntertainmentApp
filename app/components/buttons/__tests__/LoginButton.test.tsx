import { LoginButton } from "../LoginButton";

import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("LoginButton is rendered successfully in the document", () => {
  test("If LoginButton exists in the document", () => {
    render(<LoginButton children></LoginButton>);

    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).toBeInTheDocument();
  });
});
