import React from 'react';

import { BookmarkIcon } from '../bookmark-icons/bookmark-icon/BookmarkIcon';
import { SeriesIcon } from '../bookmark-icons/series-icon/SeriesIcon';
import { MoviesIcon } from '../bookmark-icons/movies-icon/MoviesIcon';
import { TrendingIcon } from '../bookmark-icons/trending-icon/TrendingIcon';

const icons = [
  { id: '1', icon: TrendingIcon, name: 'trending' },
  { id: '2', icon: MoviesIcon, name: 'movies' },
  { id: '3', icon: SeriesIcon, name: 'series' },
  { id: '4', icon: BookmarkIcon, name: 'bookmark' },
];

const showActiveIcon = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  const formerActiveIcon = document.querySelector('.active_icon');

  formerActiveIcon?.classList.remove('active_icon');
  formerActiveIcon?.classList.add('icon');

  const iconId = event.currentTarget.id;
  const iconButton = document.getElementById(iconId)?.firstElementChild;

  iconButton?.classList.add('active_icon');
  iconButton?.classList.remove('icon');

  console.log(iconButton);
};

const listItems = icons.map((item) => (
  <button
    className="icon_button"
    key={item.id}
    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      setCategory(item.name);
      showActiveIcon(event);
    }}
    id={item.id}
  >
    <item.icon className="icon" />
  </button>
));

export const NavigationIcons = () => {
  return (
    <div>
      <div className="navigation_icons">{listItems}</div>
    </div>
  );
};
