import type { ForwardedRef } from "react";
import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type EmailInputProps = {
  children?: React.ReactNode;
  id?: string;
};

export const EmailInput = React.forwardRef(
  (
    { children, ...props }: EmailInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className="email_container" htmlFor={props.id}>
        <input
          id={props.id}
          className="email_input medium_heading"
          type="email"
          ref={ref}
          {...props}
          placeholder="Email address"
        />
      </label>
    );
  }
);
