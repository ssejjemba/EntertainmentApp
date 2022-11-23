import type { ForwardedRef } from "react";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import styles from "./styles.css";

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
<<<<<<< HEAD:app/components/Inputs/email/Email.tsx

      const result = validateEmail(currentInputText);
      setError(result);
=======
      if (currentInputText !== undefined && props.validationFn) {
        const result = props.validationFn(currentInputText);
        setError(result);
      }
>>>>>>> main:app/components/Inputs/text/TextInput.tsx
    };

    return (
      <label className="input_container" htmlFor={props.id}>
        <input
          id="email"
<<<<<<< HEAD:app/components/Inputs/email/Email.tsx
          className="email_input small_normal_text"
          type="email"
=======
          className="input_field small_heading"
          type={props.type}
>>>>>>> main:app/components/Inputs/text/TextInput.tsx
          ref={innerRef}
          {...props}
          placeholder={props.placeholder}
          required
          data-testid="text-input"
          onFocus={doValidation}
          onChange={doValidation}
        />
<<<<<<< HEAD:app/components/Inputs/email/Email.tsx
        <span
          data-testid="email-error"
          className="error-color small_normal_text"
        >
=======
        <span data-testid="input-error" className="text-message">
>>>>>>> main:app/components/Inputs/text/TextInput.tsx
          {error}
        </span>
      </label>
    );
  }
);

TextInput.displayName = "Text Input";
