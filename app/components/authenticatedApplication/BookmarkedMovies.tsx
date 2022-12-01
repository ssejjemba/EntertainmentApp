import React from 'react';

import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';
import { Movie } from '~/store/data';

type bookMarkedProps = {
  data: Movie[];
  addBookmarkedData: (item: Movie) => void;
};

export const BookMarked = (props: bookMarkedProps) => {
  const { data, addBookmarkedData } = props;

  const storeData = data;

  const bookmarkedMovieData = storeData.filter(
    (item) => item.isBookmarked && item.category === 'Movie',
  );

  const bookmarkedSerieData = storeData.filter(
    (item) => item.isBookmarked && item.category === 'TV Series',
  );

  return (
    <div className="bookmark_container">
      <div>
        <p className="category_tag">Bookmarked Movies</p>
        <div className="bookmarked_thumbnail--container">
          {bookmarkedMovieData.map((item) => (
            <div key={item.title} className="recommended_thumbnail--wrapper">
              <div className="recommened_thumbnail--ImageContainer">
                <Thumbnail
                  medium={item.thumbnail?.regular?.medium}
                  large={item.thumbnail?.regular?.large}
                  small={item.thumbnail?.regular?.small}
                  title={item.title}
                  bookmarked={item.isBookmarked}
                  addBookmarkedData={addBookmarkedData}
                  movie={item}
                />
              </div>
              <div className="recommended_thumbnail">
                <div className="recommended_thumbnail--detailWrapper">
                  <span className="recommended_thumbnail--detail">{item.year}</span>
                  <span className="recommended_thumbnail--detail">
                    <img src={thumbnailDot} />
                  </span>
                  <span className="recommended_thumbnail--detail">{item.category}</span>
                  <span className="recommended_thumbnail--detail">
                    <img src={thumbnailDot} />
                  </span>
                  <span className="recommended_thumbnail--detail">{item.rating}</span>
                </div>
              </div>
              <p className="recommended_thumbnail--name">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="category_tag">Bookmarked TV Series</p>
        <div className="recommended_List--container">
          {bookmarkedSerieData.map((item) => (
            <div key={item.title} className="recommended_thumbnail--wrapper">
              <div className="recommened_thumbnail--ImageContainer">
                <Thumbnail
                  medium={item.thumbnail?.regular?.medium}
                  large={item.thumbnail?.regular?.large}
                  small={item.thumbnail?.regular?.small}
                  title={item.title}
                  bookmarked={item.isBookmarked}
                  addBookmarkedData={addBookmarkedData}
                  movie={item}
                />
              </div>
              <div className="recommended_thumbnail">
                <div className="recommended_thumbnail--detailWrapper">
                  <span className="recommended_thumbnail--detail">{item.year}</span>
                  <span className="recommended_thumbnail--detail">
                    <img src={thumbnailDot} />
                  </span>
                  <span className="recommended_thumbnail--detail">{item.category}</span>
                  <span className="recommended_thumbnail--detail">
                    <img src={thumbnailDot} />
                  </span>
                  <span className="recommended_thumbnail--detail">{item.rating}</span>
                </div>
              </div>
              <p className="recommended_thumbnail--name">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
