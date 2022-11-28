import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type BookmarkIconProps = {
  className?: string;
};

export const BookmarkIcon = ({ className }: BookmarkIconProps) => {
  return (
    <div className={`bookmark-icon ${className}`}>
      <svg
        width="12"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="idle-icon"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};