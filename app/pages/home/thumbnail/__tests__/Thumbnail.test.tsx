import { Thumbnail } from "../Thumbnail";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("The Tooltip component renders successfull in the document", () => {
  test("The Tooltip component is mounted well on App render", () => {
    render(<Thumbnail src="" name="empty" />);
    const tooltip = screen.getByTestId("thumbnail");
    expect(tooltip).toBeInTheDocument();
  });
});
