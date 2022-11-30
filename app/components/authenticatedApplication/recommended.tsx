import React from 'react';

import { Thumbnail } from '../thumbnail/thumbnail';
import thumbnailDot from '../../../public/assets/thumbnailDot.svg';

import { recommendedForYour } from '../../utils/data';

const recommendedList = recommendedForYour.map((item) => (
  <div key={item.id} className="recommended_thumbnail--wrapper">
    <div className="recommened_thumbnail--ImageContainer">
      <Thumbnail image={item.src} />
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

export const Recommended = () => {
  return (
    <>
      <p className="category_tag">Recommended for you</p>
      <div className="recommended_List--container">{recommendedList}</div>
    </>
  );
};
