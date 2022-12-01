import React, { useState } from 'react';
import styles from './styles.css';
import playIcon from '../../../public/assets/iconPlay.svg';

import { IdleIcon } from '../../components/bookmark-icons/idle-icon/IdleIcon';
import { ActiveIcon } from '../bookmark-icons/active-icon/ActiveIcon';

export const links = () => [{ rel: 'stylesheet', href: styles }];

type thumbnailProps = {
  title?: string;
  small?: string;
  medium?: string;
  large?: string;
  bookmarked: boolean;
};

export const Thumbnail = (props: thumbnailProps) => {
  const { bookmarked } = props;

  const [isHovering, setIsHovering] = useState(false);

  const [bookmark, setbookmark] = useState(bookmarked);

  const addBookmarkedData = () => {
    item.push;
  };

  return (
    <div
      data-testid="thumbnail"
      className="thumbnail_container"
      onClick={() => setbookmark(!bookmark)}
    >
      <picture>
        <source media="(min-width:768px)" srcSet={props.large} />
        <source media="(min-width:465px)" srcSet={props.medium} />
        <img
          alt={props.title}
          src={props.small}
          className="thumbnail_image"
          data-testid="thumbnail-img"
        />
      </picture>

      {isHovering && (
        <div data-testid="playIcon" className="play_icon--container">
          <img src={playIcon} alt="thumbnail" className="image" />
          <p className="play_tag">Play</p>
        </div>
      )}
      {bookmark ? (
        <ActiveIcon className="bookmark" />
      ) : (
        <IdleIcon className="bookmark" data-testid="bookmark_icon" />
      )}

      <div className="container_bg hidden"></div>
    </div>
  );
};
