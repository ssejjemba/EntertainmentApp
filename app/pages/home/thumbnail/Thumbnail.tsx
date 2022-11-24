import React, { useState } from "react";
import {
  PlayButton,
  links as PlayButtonStyles,
} from "~/components/buttons/PlayButton";
import {
  BookmarkIcon,
  links as BookmarkStyles,
} from "~/components/icons/BookmarkIcon";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...BookmarkStyles(),
  ...PlayButtonStyles(),
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
      onClick={() => setIsBookmarked(!isBookmarked)}
      style={{
        background: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      role="button"
    >
      <BookmarkIcon active={isBookmarked} />
      <PlayButton className="invisible_element" />
      <div className="overlay"></div>
    </div>
  );
};
