import {
  TextInput,
  links as TextInputStyles,
} from "~/components/Inputs/text/TextInput";

import {
  LoginButton,
  links as LoginButtonStyles,
} from "~/components/buttons/LoginButton";

import { validateEmail } from "~/utils/helper";
import { Link } from "@remix-run/react";

export const links = () => [...TextInputStyles(), ...LoginButtonStyles()];

export default function Login() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="logo_box">
        <svg
          width="33"
          height="27"
          xmlns="http://www.w3.org/2000/svg"
          className="logo"
        >
          <path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" />
        </svg>
      </div>
      <div className="login_container">
        <h2 className="large_heading form_title">Login</h2>
        <TextInput
          id="email"
          type="email"
          placeholder="Email address"
          validationFn={validateEmail}
        />
        <TextInput id="password" type="password" placeholder="Password" />
        <Link to="/home">
          <LoginButton>Login to your account</LoginButton>
        </Link>
        <Link to="/SignUp" className="link_text small_normal_text">
          <span className="login_span--main">Don’t have an account?</span>
          <span className="login_span--sub">SignUp</span>
        </Link>
      </div>
    </div>
  );
}
