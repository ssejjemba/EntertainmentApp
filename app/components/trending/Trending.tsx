import styles from "./styles.css";
import { Banner, links as BannerStyles } from "../banner/Banner";
import type { Movie } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...BannerStyles(),
];

type TrendingMovieProps = {
  movies: Movie[];
};

export function TrendingMovies(props: TrendingMovieProps): JSX.Element {
  return (
    <div className="row">
      <h1 className="row_title large_heading">Trending</h1>

      <div className="row_movie_container">
        <>
          {props.movies.map((movie) => {
            return (
              movie.isTrending && (
                <Banner
                  key={movie.title}
                  title={movie.title}
                  large={movie.thumbnail?.trending?.large}
                  small={movie.thumbnail?.trending?.small}
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
