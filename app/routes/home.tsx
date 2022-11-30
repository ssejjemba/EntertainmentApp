import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import { Grid, links as gridStyles } from "~/components/row/Row";
import styles from "../styles/home.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...gridStyles(),
];

export default function Home() {
  return (
    <div className="home_container">
      <Nav />
      <main>
        <Grid />
      </main>
    </div>
  );
}
