import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";

import { EmailInput } from "~/components/Inputs/email/Email";

export const links = () => [...searchInputLinks()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <EmailInput id="__email_input__" />
    </div>
  );
}
