import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export const LoginButton = (props: ButtonProps) => {
  return <button data-testid="login-button">{props.children}</button>;
};
