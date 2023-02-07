import { useEffect } from "react";
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
import { FILTERS } from "~/constants/constants";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...SearchInputStyles(),
  ...gridStyles(),
  ...RowStyles(),
];

export default function Home() {
  const {
    activeData,
    activeFilterText,
    activeFilter,
    setActiveFilter,
    setActiveFilterText,
    showTrendingMovies,
    trendingMovies,
    toggleBookmark,
  } = useMovieDataStore((state) => state);
  useEffect(() => {
    setActiveFilter(FILTERS.TEXT);
    setActiveFilterText("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="home_container">
      <Nav movieCategory={activeFilter} setMovieCategory={setActiveFilter} />
      <main>
        {activeFilter === FILTERS.TEXT && (
          <SearchInput
            value={activeFilterText}
            onChange={setActiveFilterText}
          />
        )}
        {showTrendingMovies && <TrendingMovies movies={trendingMovies} />}
        <MovieList movies={activeData} toggleBookmark={toggleBookmark} />
      </main>
    </div>
  );
}
