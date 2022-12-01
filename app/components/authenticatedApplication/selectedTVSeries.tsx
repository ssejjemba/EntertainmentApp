import React from 'react';
import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';

import { Movie } from '~/store/data';

type selectedTVSeriesProps = {
  data: Movie[];
  addBookmarkedData: (item: Movie) => void;
};

export const SelectedTVSeries = (props: selectedTVSeriesProps) => {
  const { data, addBookmarkedData } = props;

  const serieData = data.filter((serie) => serie.category === 'TV Series');

  return (
    <>
      <div>
        <p className="category_tag">TV Series</p>
        <div className="recommended_List--container">
          {serieData.map((item) => (
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
    </>
  );
};
