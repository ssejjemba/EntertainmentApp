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

import {
  Thumbnail,
  links as thumbnailStyles,
} from "~/pages/home/thumbnail/Thumbnail";

export const links = () => [
  ...searchInputLinks(),
  ...emailInputStyles(),
  ...loginButtonStyles(),
  ...thumbnailStyles(),
];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <EmailInput />
      <LoginButton>Login to your account</LoginButton>
      <Thumbnail
        name="earth"
        src="assets/thumbnails/earths-untouched/regular/medium.jpg"
      />
    </div>
  );
}
