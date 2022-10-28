import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";

export const links = () => [...searchInputLinks()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
    </div>
  );
}
