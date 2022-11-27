import {
  SearchInput,
  links as searchInputLinks,
} from "~/components/Inputs/search/Search";

import { validateEmail } from "~/utils/helper";


import {Button, links as button } from "~/components/button/button";
import { Thumbnail, links as thumbnail } from "~/components/thumbnail/thumbnail";
import thumbnailImage from "../../public/assets/thumbnails/1998/regular/medium.jpg"
import { TextInput, links as textInput } from "~/components/Inputs/text/TextInput";


export const links = () => [...searchInputLinks(),  ...button(), ...thumbnail(), ...textInput()];

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <SearchInput id="__search_bar_input__" />
      
      <TextInput type="email"
        placeholder="Email Address"
        validationFn={validateEmail} />
      <Button buttonName="Button" />
      <Thumbnail image={thumbnailImage}/>
    </div>
  );
}
