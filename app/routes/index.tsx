import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";


import {
  EmailInput,
  links as emailInputStyles,
} from "~/components/Inputs/email/Email";
import {Button, links as button } from "~/components/button/button";
import { Thumbnail, links as thumbnail } from "~/components/thumbnail/thumbnail";
import thumbnailImage from "../../public/assets/thumbnails/1998/regular/medium.jpg"


export const links = () => [...searchInputLinks(), ...emailInputStyles(), ...button(), ...thumbnail()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <EmailInput />
      <Button buttonName="Button" />
      <Thumbnail image={thumbnailImage}/>
    </div>
  );
}
