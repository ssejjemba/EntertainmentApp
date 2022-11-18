import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type ButtonProps = {
  children: React.ReactNode;
};

export const LoginButton = (props: ButtonProps) => {
  return (
    <button className="btn small_normal_text" data-testid="login-button">
      {props.children}
    </button>
  );
};
