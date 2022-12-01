import React from 'react';

import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';
import { Movie } from '~/store/data';

type trendingMovieProps = {
  data: Movie[];
  addBookmarkedData: (item: Movie) => void;
};

export const TrendingMovies = (props: trendingMovieProps) => {
  const { data, addBookmarkedData } = props;

  const trendingMovieData = data.filter((item) => item.isTrending);

  return (
    <>
      <div>
        <p className="category_tag">Trending</p>
        <div className="trending_movies--container">
          {trendingMovieData.map((item) => (
            <div key={item.title} className="thumbnail_wrapper">
              <Thumbnail
                medium={item.thumbnail?.regular?.medium}
                large={item.thumbnail?.regular?.large}
                small={item.thumbnail?.regular?.small}
                title={item.title}
                bookmarked={item.isBookmarked}
                addBookmarkedData={addBookmarkedData}
                movie={item}
              />
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
                  <span className="trending_movie--detailTag">{item.rating}</span>
                </div>
                <p className="trending_movie--name">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
