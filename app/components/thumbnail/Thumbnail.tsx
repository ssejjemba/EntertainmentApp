import React, { useState } from "react";
import {
  BookmarkIcon,
  links as BookmarkStyles,
} from "~/components/icons/bookmark-icons/BookmarkIcon";
import { PlayButton, links as PlayButtonStyles } from "../buttons/PlayButton";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...PlayButtonStyles(),
  ...BookmarkStyles(),
];

type ThumbnailProps = {
  children?: React.ReactNode;
  title: string;
  small?: string;
  large?: string;
  medium?: string;
};

export const Thumbnail = (props: ThumbnailProps) => {
  const [IsBookmarked, setIsbookmarked] = useState(false);
  return (
    <div
      className="thumbnail_container"
      data-testid="thumbnail"
      onClick={() => setIsbookmarked(!IsBookmarked)}
    >
      <BookmarkIcon className={IsBookmarked ? "active" : ""} />
      <picture>
        <source media="(min-width:768px)" srcSet={props.large} />
        <source media="(min-width:465px)" srcSet={props.medium} />
        <img
          alt={props.title}
          src={props.small}
          className="thumbnail_img"
          data-testid="thumbnail-img"
        />
      </picture>
      <PlayButton />
    </div>
  );
};
