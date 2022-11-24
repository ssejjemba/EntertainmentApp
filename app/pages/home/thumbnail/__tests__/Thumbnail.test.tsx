import { Thumbnail } from "../Thumbnail";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

describe("The Thumbnail component renders successfull in the document", () => {
  test("The Thumbnail component is mounted well on App render", () => {
    render(<Thumbnail src="" name="empty" />);

    const thumbnail = screen.getByTestId("thumbnail");

    const thumbnailImg = screen.getByTestId("thumbnail-img");

    const idleBookmark = screen.getByTestId("idle-bookmark");

    const playControl = screen.getByTestId("play-control");

    expect(thumbnail).toBeInTheDocument();

    expect(thumbnailImg).toBeInTheDocument();

    expect(idleBookmark).toBeInTheDocument();

    expect(playControl).toBeInTheDocument();
  });

  test("The Thumbnail componet calls the onClick prop when clicked", async () => {
    render(<Thumbnail src="" name="empty" />);

    const thumbnail = screen.getByTestId("thumbnail");

    const activeBookmark = screen.getByTestId("active-bookmark");

    fireEvent.click(thumbnail);

    await waitFor(() => expect(activeBookmark).toBeInTheDocument());
  });
});
