import { LoginButton } from "../LoginButton";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LoginButton is rendered successfully in the document", () => {
  test("LoginButton will be mounted successs in the document", () => {
    render(<LoginButton children></LoginButton>);

    const loginButton = screen.getByTestId("login-button");

    expect(loginButton).toBeInTheDocument();
  });
});
