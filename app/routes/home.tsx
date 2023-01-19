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
  const {
    currentData,
    activeFilterText,
    activeFilter,
    setActiveFilter,
    setActiveFilterText,
    showTrendingMovies,
    trendingMovies,
  } = useMovieDataStore((state) => state);
  return (
    <div className="home_container">
      <Nav movieCategory={activeFilter} setMovieCategory={setActiveFilter} />
      <main>
        <SearchInput value={activeFilterText} onChange={setActiveFilterText} />
        {showTrendingMovies && <TrendingMovies movies={trendingMovies} />}
        <MovieList movies={currentData} />
      </main>
    </div>
  );
}
