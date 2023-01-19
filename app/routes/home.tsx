import { useState } from "react";
import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import {
  TrendingMovies,
  links as RowStyles,
} from "~/components/trending/Trending";
import {
  MovieList,
  links as gridStyles,
} from "~/components/movie-list/MovieList";
import {
  SearchInput,
  links as SearchInputStyles,
} from "~/components/Inputs/search/Search";
import styles from "../styles/home.css";
import { useMovieDataStore } from "~/store/data";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...SearchInputStyles(),
  ...gridStyles(),
  ...RowStyles(),
];

export default function Home() {
  const [movieCategory, setMovieCategory] = useState("");
  const {
    currentData,
    activeFilterText,
    setActiveFilterText,
    showTrendingMovies,
    trendingMovies,
  } = useMovieDataStore((state) => state);
  return (
    <div className="home_container">
      <Nav movieCategory={movieCategory} setMovieCategory={setMovieCategory} />
      <main>
        <SearchInput value={activeFilterText} onChange={setActiveFilterText} />
        {showTrendingMovies && <TrendingMovies movies={trendingMovies} />}
        <MovieList movies={currentData} />
      </main>
    </div>
  );
}
