import React from 'react';
import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';
import { selectedMovies } from '~/utils/data';

//import data
import { useMovieDataStore } from '~/store/data';

const data = useMovieDataStore((state) => state.data);

const moviesList = data.map((item) => (
  <div key={item.title} className="recommended_thumbnail--wrapper">
    <div className="recommened_thumbnail--ImageContainer">
      <Thumbnail
        medium={item.thumbnail?.regular?.medium}
        large={item.thumbnail?.regular?.large}
        small={item.thumbnail?.regular?.small}
        title={item.title}
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
        <span className="recommended_thumbnail--detail">{item.age}</span>
      </div>
    </div>
    <p className="recommended_thumbnail--name">{item.name}</p>
  </div>
));

export const SelectedMovies = () => {
  return (
    <>
      <div>
        <p className="category_tag">Movies</p>
        <div className="recommended_List--container"> {moviesList}</div>
      </div>
    </>
  );
};
