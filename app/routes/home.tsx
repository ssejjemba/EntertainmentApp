import { Nav, links as NavigationStyles } from "~/components/nav/Navigation";
import styles from "../styles/home.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...NavigationStyles(),
];

export default function Home() {
  return (
    <div>
      <Nav />
    </div>
  );
}
