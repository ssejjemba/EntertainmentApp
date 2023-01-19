import styles from "./styles.css";
import { Thumbnail, links as ThumbnailStyles } from "../thumbnail/Thumbnail";
import type { Movie } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...ThumbnailStyles(),
];

type MovieListProps = {
  movies: Movie[];
};

export function MovieList({ movies }: MovieListProps): JSX.Element {
  return (
    <div className="grid">
      <h1 className="grid_title large_heading">Recommended for you</h1>

      <div className="grid_movie_gallery">
        <>
          {movies.map((movie) => {
            return (
              <Thumbnail
                key={movie.title}
                title={movie.title}
                medium={movie.thumbnail?.regular?.medium}
                large={movie.thumbnail?.regular?.large}
                small={movie.thumbnail?.regular?.small}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
                bookmarked={movie.isBookmarked}
              />
            );
          })}
        </>
      </div>
    </div>
  );
}
