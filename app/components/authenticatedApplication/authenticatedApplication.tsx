import React, { useState } from 'react';
import styles from './styles.css';

import logo from '../../../public/assets/logo.svg';
import avatar from '../../../public/assets/image-avatar.png';

import { icons } from '~/utils/data';
import { SearchInput } from '../Inputs/search/Search';
import { TrendingMovies } from './trendingMovies';
import { SelectedMovies } from './selectedMovies';
import { SelectedTVSeries } from './selectedTVSeries';
import { Recommended } from './recommended';

import { showActiveIcon } from '~/utils/helper';
import { removeActiveIcon } from '~/utils/helper';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const AuthenticatedApplication = () => {
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

  const [category, setCategory] = useState('trending');

  let categories;

  if (category === 'trending') {
    categories = (
      <>
        <div>
          <TrendingMovies />
          <Recommended />
        </div>
      </>
    );
  } else if (category === 'movies') {
    categories = <SelectedMovies />;
  } else if (category === 'series') {
    categories = <SelectedTVSeries />;
  }

  return (
    <div className="authenticated_user">
      <div className="navigation_bar">
        <div className="category_icons--container">
          <button
            className="logo"
            onClick={() => {
              setCategory('trending');
              removeActiveIcon();
            }}
          >
            <img src={logo} />
          </button>
          <div className="navigation_icons">{listItems}</div>
        </div>
        <div>
          <img src={avatar} />
        </div>
      </div>
      <div className="category_container">
        <SearchInput />
        {categories}
      </div>
    </div>
  );
};
