import React, { useState } from 'react';
import styles from './styles.css';
import playIcon from '../../../public/assets/iconPlay.svg';

import { IdleIcon } from '../../components/bookmark-icons/idle-icon/IdleIcon';
import { ActiveIcon } from '../bookmark-icons/active-icon/ActiveIcon';

export const links = () => [{ rel: 'stylesheet', href: styles }];

type thumbnailProps = {
  image: string;
};

export const Thumbnail = (props: thumbnailProps) => {
  const { image } = props;

  const [isHovering, setIsHovering] = useState(false);

  const [bookmarked, setbookmarked] = useState(false);

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
      onClick={() => setbookmarked(!bookmarked)}
    >
      <img src={image} alt={image} className="thumbnail_image" />
      {isHovering && (
        <div data-testid="playIcon" className="play_icon--container">
          <img src={playIcon} alt="thumbnail" className="image" />
          <p className="play_tag">Play</p>
        </div>
      )}
      {bookmarked ? (
        <ActiveIcon className="bookmark" />
      ) : (
        <IdleIcon className="bookmark" data-testid="bookmark_icon" />
      )}

      <div className="container_bg hidden"></div>
    </div>
  );
};
