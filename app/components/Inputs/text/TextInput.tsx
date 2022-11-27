import type { ForwardedRef } from "react";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import styles from "./styles.css"

export const links = () => [{ rel: "stylesheet", href: styles }];

type TextInputProps = {
  children?: React.ReactNode;
  id?: string;
  type?: string;
  placeholder?: string;
  validationFn?: (text: string) => string;
};

export const TextInput = React.forwardRef(
  (
    { children, ...props }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [error, setError] = useState("");
    const innerRef = useRef<null | HTMLInputElement>(null);

    const doValidation = () => {
      const currentInputText = innerRef.current?.value;
      if (currentInputText !== undefined && props.validationFn) {
        const result = props.validationFn(currentInputText);
        setError(result);
      }
    };

    return (
      <label className="input_container" htmlFor={props.id}>
        <input
          id="email"
          className="email_input small_heading"
          type={props.type}
          ref={innerRef}
          {...props}
          placeholder={props.placeholder}
          required
          data-testid="text-input"
          onFocus={doValidation}
          onChange={doValidation}
        />
        <span data-testid="input-error" className="text-message">
          {error}
        </span>
      </label>
    );
  }
);

TextInput.displayName = "Text Input";
