import React, { useState } from "react";
import {
  BookmarkIcon,
  links as BookmarkStyles,
} from "~/components/icons/bookmark-icons/BookmarkIcon";
import {
  PlayButton,
  links as PlayButtonStyles,
} from "~/components/buttons/PlayButton";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...PlayButtonStyles(),
  ...BookmarkStyles(),
];

type ThumbnailProps = {
  children?: React.ReactNode;
  name: string;
  src: string;
};

export const Thumbnail = ({ name, src }: ThumbnailProps) => {
  const [IsBookmarked, setIsbookmarked] = useState(false);
  return (
    <div
      className="thumbnail_container"
      data-testid="thumbnail"
      onClick={() => setIsbookmarked(!IsBookmarked)}
    >
      <BookmarkIcon className={IsBookmarked ? "active" : ""} />
      <img
        alt={name}
        src={src}
        className="thumbnail_img"
        data-testid="thumbnail-img"
      />
      <PlayButton />
    </div>
  );
};
