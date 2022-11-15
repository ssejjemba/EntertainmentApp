import type { ForwardedRef } from 'react';
import React from 'react';
import styles from './styles.css';
import { handleSubmit, emailValidator } from '../../../Utils/emailValidator';

export const links = () => [{ rel: 'stylesheet', href: styles }];

type EmailInputProps = {
  children?: React.ReactNode;
  id?: string;
};

export const EmailInput = React.forwardRef(
  ({ children, ...props }: EmailInputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
          onFocus={emailValidator}
          onKeyDown={(e) => {
            handleSubmit(e);
          }}
        />
        <p className="text-message"></p>
      </label>
    );
  },
);
