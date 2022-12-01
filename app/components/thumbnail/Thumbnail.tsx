import React, { useState } from "react";
import {
  BookmarkIcon,
  links as BookmarkStyles,
} from "~/components/icons/bookmark-icons/BookmarkIcon";
import { PlayButton, links as PlayButtonStyles } from "../buttons/PlayButton";
import styles from "./styles.css";

export const links = () => [
  { rel: "stylesheet", href: styles },
  ...PlayButtonStyles(),
  ...BookmarkStyles(),
];

type ThumbnailProps = {
  children?: React.ReactNode;
  title: string;
  small?: string;
  large?: string;
  medium?: string;
  year?: number;
  category?: string;
  rating?: string;
  bookmarked?: boolean;
};

export const Thumbnail = (props: ThumbnailProps) => {
  const [IsBookmarked, setIsbookmarked] = useState(props.bookmarked);
  return (
    <div
      className="thumbnail_container"
      data-testid="thumbnail"
      onClick={() => setIsbookmarked(!IsBookmarked)}
    >
      <BookmarkIcon className={IsBookmarked ? "active" : ""} />
      <picture>
        <source media="(min-width:768px)" srcSet={props.large} />
        <source media="(min-width:465px)" srcSet={props.medium} />
        <img
          alt={props.title}
          src={props.small}
          className="thumbnail_img"
          data-testid="thumbnail-img"
        />
      </picture>
      <div className="controls_container--thumbnail">
        <PlayButton />
      </div>
      <div className="thumbnail_info">
        <ul className="thumbnail_icons small_icon_text">
          <li className="thumbnail_icons_year">{props.year}</li>
          <li className="thumbnail_icons_category">
            {props.category === "Movie" ? (
              <div className="category_icon_box category_icon_box--movie">
                <svg
                  width="12"
                  height="12"
                  className="category_icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" />
                </svg>
                <span className="category_span">{props.category}</span>
              </div>
            ) : (
              <div className="category_icon_box category_icon_box--serie">
                <svg
                  width="12"
                  height="12"
                  className="category_icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" />
                </svg>
                <span className="category_span">{props.category}</span>
              </div>
            )}
          </li>
          <li className="thumbnail_icons_rating">{props.rating}</li>
        </ul>
        <h3 className="thumbnail_title extra_small_heading">{props.title}</h3>
      </div>
    </div>
  );
};
