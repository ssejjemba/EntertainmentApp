import React, { useState } from "react";
// import { IdleIcon } from "../../../components/bookmark-icons/idle-icon/IdleIcon";
// import { ActiveIcon } from "~/components/bookmark-icons/active-icon/ActiveIcon";
import {
  BookmarkIcon,
  links as BookmarkStyles,
} from "~/components/icons/BookmarkIcon";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...BookmarkStyles(),
];

type ThumbnailProps = {
  children?: React.ReactNode;
  name: string;
  src: string;
};

export const Thumbnail = ({ name, src }: ThumbnailProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div
      className="thumbnail-container"
      data-testid="thumbnail"
      onClick={() => setIsBookmarked(true)}
    >
      <BookmarkIcon active={isBookmarked} />
      <img
        alt={name}
        src={src}
        className="thumbnail-img"
        data-testid="thumbnail-img"
      />
      <div className="controls-container">
        <div className="play-control" data-testid="play-control">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#fff"
            />
          </svg>
          <span className="extra_small_heading">Play</span>
        </div>
      </div>
    </div>
  );
};
