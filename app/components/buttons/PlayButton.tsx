import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type ButtonProps = {
  onClick?: () => void;
  className?: string;
};

export const PlayButton = (props: ButtonProps) => {
  return (
    <div className="controls_container">
      <button
        onClick={props.onClick}
        className={`play_control ${props.className}`}
        data-testid="play-control"
      >
        <svg
          className="play_icon"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" />
        </svg>
        <span className="extra_small_heading">Play</span>
      </button>
    </div>
  );
};