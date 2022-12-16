import styles from "./styles.css";
import { Thumbnail, links as ThumbnailStyles } from "../thumbnail/Thumbnail";
import { useMovieDataStore } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...ThumbnailStyles(),
];

type GridProps = {
  movieCategory: string;
  setMovieCategory: (movieCategory: string) => void;
};

export function Grid({
  movieCategory,
  setMovieCategory,
}: GridProps): JSX.Element {
  const data = useMovieDataStore((state) => state.data);

  return (
    <div className="grid">
      <h1 className="grid_title large_heading">Recommended for you</h1>

      <div className="grid_movie_gallery">
        <>
          {data.map((movie) => {
            return (
              !movie.isTrending && (
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
              )
            );
          })}
        </>
      </div>
    </div>
  );
}
