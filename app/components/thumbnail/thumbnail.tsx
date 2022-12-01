import React, { useState } from 'react';
import styles from './styles.css';
import playIcon from '../../../public/assets/iconPlay.svg';

import { IdleIcon } from '../../components/bookmark-icons/idle-icon/IdleIcon';
import { ActiveIcon } from '../bookmark-icons/active-icon/ActiveIcon';
import { Movie } from '~/store/data';

export const links = () => [{ rel: 'stylesheet', href: styles }];

type thumbnailProps = {
  title?: string;
  small?: string;
  medium?: string;
  large?: string;
  bookmarked: boolean;
  addBookmarkedData: (item: Movie) => void;
  movie: Movie;
};

export const Thumbnail = (props: thumbnailProps) => {
  const { bookmarked, addBookmarkedData, movie } = props;

  const [isHovering, setIsHovering] = useState(false);

  const [bookmark, setbookmark] = useState(bookmarked);

  const handleMouseOver = () => {
    document.querySelector('.container_bg')?.classList.add('overlay');

    document.querySelector('.container_bg')?.classList.remove('hidden');
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    document.querySelector('.container_bg')?.classList.add('hidden');

    document.querySelector('.container_bg')?.classList.remove('overlay');

    setIsHovering(false);
  };

  return (
    <div
      data-testid="thumbnail"
      className="thumbnail_container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={() => {
        {
          setbookmark(!bookmark);
        }
        addBookmarkedData(movie);
      }}
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
