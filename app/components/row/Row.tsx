import { useRef, useState } from "react";
// import type { Movie } from "../../../typings";
// import Data from "../../../public/data.json";
import styles from "./styles.css";
import { Thumbnail, links as ThumbnailStyles } from "../thumbnail/Thumbnail";
import { useMovieDataStore } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...ThumbnailStyles(),
];

export function Row(): JSX.Element {
  const rowRef = useRef<HTMLDivElement>(null);

  const [isMoved, setIsMoved] = useState(false);
  const data = useMovieDataStore((state) => state.data);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="row">
      <h1 className="row_title large_heading">Trending</h1>
      <div className="row_tiles">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-9 h-9 row_icon ${isMoved && "hidden"}`}
          onClick={() => handleClick("left")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div ref={rowRef} className="row_movie">
          <>
            {data.map((movie) => {
              return (
                <Thumbnail
                  key={movie.title}
                  title={movie.title}
                  medium={movie.thumbnail?.regular?.medium}
                  large={movie.thumbnail?.regular?.large}
                  small={movie.thumbnail?.regular?.small}
                />
              );
            })}
          </>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9 row_icon"
            onClick={() => handleClick("right")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
