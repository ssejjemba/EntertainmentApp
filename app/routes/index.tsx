import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";

import { validateEmail } from "~/utils/helper";

import {
  TextInput,
  links as emailInputStyles,
} from "~/components/Inputs/text/TextInput";

export const links = () => [...searchInputLinks(), ...emailInputStyles()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <TextInput
        type="email"
        placeholder="Email Address"
        validationFn={validateEmail}
      />
    </div>
  );
}
