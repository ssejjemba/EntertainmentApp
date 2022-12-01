import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import { Row, links as RowStyles } from "~/components/row/Row";
import { Grid, links as gridStyles } from "~/components/grid/Grid";
import styles from "../styles/home.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...gridStyles(),
  ...RowStyles(),
];

export default function Home() {
  return (
    <div className="home_container">
      <Nav />
      <main>
        <Row />
        <Grid />
      </main>
    </div>
  );
}
