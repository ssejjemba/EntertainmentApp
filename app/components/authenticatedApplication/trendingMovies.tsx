import React from 'react';

import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';
import { trendingMovies } from '../../utils/data';

const trendingMoviesList = trendingMovies.map((item) => (
  <div key={item.id} className="thumbnail_wrapper">
    <Thumbnail image={item.src} />
    <div className="trending_movie--details">
      <div className="trending_movie--detailsContainer">
        <span className="trending_movie--detailTag">{item.year}</span>
        <span className="trending_movie--detailTag">
          <img src={thumbnailDot} />
        </span>
        <span className="trending_movie--detailTag">{item.category}</span>
        <span className="trending_movie--detailTag">
          <img src={thumbnailDot} />
        </span>
        <span className="trending_movie--detailTag">{item.age}</span>
      </div>
      <p className="trending_movie--name">{item.name}</p>
    </div>
  </div>
));

export const TrendingMovies = () => {
  return (
    <>
      <div>
        <p className="category_tag">Trending</p>
        <div className="trending_movies--container">{trendingMoviesList}</div>
      </div>
    </>
  );
};
