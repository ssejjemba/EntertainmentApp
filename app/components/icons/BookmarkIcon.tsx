// Idle Bookmark Icon
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type BookmarkIconProps = {
  active?: boolean;
};

export const BookmarkIcon = ({ active }: BookmarkIconProps) => {
  let className = "";
  if (active) {
    className = "active";
  }
  return (
    <div className={`container ${className}`}>
      <svg
        width="12"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        data-testid="bookmark-icon"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
