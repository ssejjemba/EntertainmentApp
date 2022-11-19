import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";

import {
  EmailInput,
  links as emailInputStyles,
} from "~/components/Inputs/email/Email";

import {
  LoginButton,
  links as loginButtonStyles,
} from "~/components/buttons/LoginButton";
import { IdleIcon } from "~/components/bookmark-icons/idle-icon/IdleIcon";
import { ActiveIcon } from "~/components/bookmark-icons/active-icon/ActiveIcon";

export const links = () => [
  ...searchInputLinks(),
  ...emailInputStyles(),
  ...loginButtonStyles(),
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <EmailInput />
      <LoginButton>Login to your account</LoginButton>
      <IdleIcon />
      <ActiveIcon />
    </div>
  );
}
