import { ForwardedRef, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import styles from "./styles.css";
import { validateEmail } from "~/utils/helper";
import errors from "~/constants/errors";

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
      if (currentInputText !== undefined) {
        const result = validateEmail(currentInputText);
        setError(result);
      }
    };

    let containerClass = ''

    if(error !== ""){
      containerClass = 'red_border'
    }

   
    

    return (
      <label className={`email_container ${containerClass}`} htmlFor={props.id}>
        <input
          id="email"
          className="email_input small_heading"
          type="email"
          ref={innerRef}
          {...props}
          placeholder="Email address"
          required
          data-testid="email-input"
          onFocus={doValidation}
          onChange={doValidation}
        />
        <span data-testid="email-error" className="text-message">
          {error}
        </span>
      </label>
    );
  }
);

EmailInput.displayName = "Email Input";
