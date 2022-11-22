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
import bookmarkImage from "../../public/assets/thumbnails/community-of-ours/regular/medium.jpg"
import { Bookmark , links as bookmark} from "~/components/bookmark/bookmark";


export const links = () => [...searchInputLinks(), ...bookmark(), ...emailInputStyles(), ...button(), ...thumbnail()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      <EmailInput />
      <Button buttonName="Button" />
      <Thumbnail image={thumbnailImage}/>
      <Bookmark image={bookmarkImage} />
    </div>
  );
}
