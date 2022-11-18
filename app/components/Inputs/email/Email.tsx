import type { ForwardedRef } from "react";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import styles from "./styles.css";
import { validateEmail } from "~/utils/helper";

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
    const [error, setError] = useState("");
    const innerRef = useRef<null | HTMLInputElement>(null);

    const doValidation = () => {
      const currentInputText = innerRef.current?.value;

      const result = validateEmail(currentInputText);
      setError(result);

      console.log(result);
    };

    return (
      <label className="email_container" htmlFor={props.id}>
        <input
          id="email"
          className="email_input small_normal_text"
          type="email"
          ref={innerRef}
          {...props}
          placeholder="Email address"
          required
          data-testid="email-input"
          onFocus={doValidation}
          onChange={doValidation}
        />
        <span
          data-testid="email-error"
          className="error-color small_normal_text"
        >
          {error}
        </span>
      </label>
    );
  }
);

EmailInput.displayName = "Email Input";
