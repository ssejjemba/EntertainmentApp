import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const PlayButton = () => {
  return (
    <div className="controls_container">
      <button className="play_control" data-testid="play_control">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
            fill="#fff"
          />
        </svg>
        <span className="extra_small_heading">Play</span>
      </button>
    </div>
  );
};
