import { useState } from "react";
import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import { Row, links as RowStyles } from "~/components/row/Row";
import { Grid, links as gridStyles } from "~/components/grid/Grid";
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
  const [movieCategory, setMovieCategory] = useState("home");
  return (
    <div className="home_container">
      <Nav />
      <main>
        <SearchInput />
        <Row />
        <Grid />
      </main>
    </div>
  );
}
