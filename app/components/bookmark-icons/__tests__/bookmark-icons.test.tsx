import { IdleIcon } from "../idle-icon/IdleIcon";
import { ActiveIcon } from "../active-icon/ActiveIcon";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("The Idle book-mark Icon will render successfully in the document", () => {
  test("ensure the Idle Icon is successfully being rendered in the App", () => {
    render(<IdleIcon />);

    const idleIcon = screen.getByTestId("idle-icon");

    expect(idleIcon).toBeInTheDocument();
  });
});

describe("The Active book-mark Icon will render successfully in the document", () => {
  test("The Active Icon is successfully being rendered in the App", () => {
    render(<ActiveIcon />);
    const activeIcon = screen.getByTestId("active-icon");

    expect(activeIcon).toBeInTheDocument();
  });
});
