import { Thumbnail } from "../Thumbnail";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";

describe("The Thumbnail component renders successfull in the document", () => {
  test("The Thumbnail component is mounted well on App render", () => {
    render(<Thumbnail title="movie_title" />);

    const thumbnail = screen.getByTestId("thumbnail");

    const thumbnailImg = screen.getByTestId("thumbnail-img");

    const BookmarkIcon = screen.getByTestId("bookmark-icon");

    const playControl = screen.getByTestId("play-control");

    expect(thumbnail).toBeInTheDocument();

    expect(thumbnailImg).toBeInTheDocument();

    expect(BookmarkIcon).toBeInTheDocument();

    expect(playControl).toBeInTheDocument();
  });
});
