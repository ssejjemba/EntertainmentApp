import styles from "./styles.css";
import { Thumbnail, links as ThumbnailStyles } from "../thumbnail/Thumbnail";
import { useMovieDataStore } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...ThumbnailStyles(),
];

export function Grid(): JSX.Element {
  const data = useMovieDataStore((state) => state.data);

  return (
    <div className="grid">
      <h1 className="grid_title large_heading">Trending</h1>
      <div className="grid_tiles">
        <div className="grid_movie">
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
        </div>
      </div>
    </div>
  );
}
