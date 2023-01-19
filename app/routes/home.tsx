import { useState } from "react";
import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import { Row, links as RowStyles } from "~/components/row/Row";
import {
  MovieList,
  links as gridStyles,
} from "~/components/movie-list/MovieList";
import {
  SearchInput,
  links as SearchInputStyles,
} from "~/components/Inputs/search/Search";
import styles from "../styles/home.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...SearchInputStyles(),
  ...gridStyles(),
  ...RowStyles(),
];

export default function Home() {
  const [movieCategory, setMovieCategory] = useState("");
  return (
    <div className="home_container">
      <Nav movieCategory={movieCategory} setMovieCategory={setMovieCategory} />
      <main>
        <SearchInput />
        <Row />
        <MovieList movieCategory={movieCategory} />
      </main>
    </div>
  );
}
