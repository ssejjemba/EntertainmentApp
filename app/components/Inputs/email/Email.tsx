import type { ForwardedRef } from "react";
import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type EmailInputProps = {
  children?: React.ReactNode;
  id?: string;
};

function emailValidator(e: React.FocusEvent<HTMLInputElement>) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const inputElement: HTMLInputElement | null = e.target;
  const emailValue = inputElement?.value;
  const message: any = document.querySelector(".text-message");

  if (!emailValue) {
    message.innerHTML = "Can't be empty";
    console.log("am doing something about Can't be empty");
  } else if (!emailValue.match(pattern)) {
    message.innerHTML = "Invalid Email Address";
    console.log("am doing something about Invalid Email Address");
  }
}

export const EmailInput = React.forwardRef(
  (
    { children, ...props }: EmailInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className="email_container" htmlFor={props.id}>
        <input
          id="email"
          className="email_input small_heading"
          type="email"
          ref={ref}
          {...props}
          placeholder="Email address"
          required
          onBlur={emailValidator}
        />
        <p className="text-message"></p>
      </label>
    );
  }
);
