import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import { Row, links as RowStyles } from "~/components/row/Row";
import styles from "../styles/home.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
  ...RowStyles(),
];

export default function Home() {
  return (
    <div className="home_container">
      <Nav />
      <main>
        <Row />
      </main>
    </div>
  );
}
