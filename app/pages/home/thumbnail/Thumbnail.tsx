import React, { useState } from "react";
import { IdleIcon } from "../../../components/bookmark-icons/idle-icon/IdleIcon";
import { ActiveIcon } from "~/components/bookmark-icons/active-icon/ActiveIcon";
import {
  PlayButton,
  links as PlayButtonStyles,
} from "~/components/buttons/PlayButton";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...PlayButtonStyles(),
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
      {IsBookmarked ? (
        <ActiveIcon
          className="bookmark-icon active-bookmark"
          id="active-bookmark"
        />
      ) : (
        <IdleIcon className="bookmark-icon idle-bookmark" id="idle-bookmark" />
      )}
      <img
        alt={name}
        src={src}
        className="thumbnail-img"
        data-testid="thumbnail-img"
      />
      <PlayButton />
    </div>
  );
};
