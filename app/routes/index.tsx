import styles from './styles.css';
import { SearchInput, links as searchInputLinks } from '~/components/Inputs/search/Search';

import { validateEmail } from '~/utils/helper';

import { Button, links as button } from '~/components/button/button';
import { Thumbnail, links as thumbnail } from '~/components/thumbnail/thumbnail';
import thumbnailImage from '../../public/assets/thumbnails/1998/regular/medium.jpg';
import { TextInput, links as textInput } from '~/components/Inputs/text/TextInput';
import { Authentication, links as logIn } from '~/components/logIn/login';
import { useState } from 'react';
import {
  AuthenticatedApplication,
  links as authenticatedApplication,
} from '~/components/authenticatedApplication/authenticatedApplication';

export const links = () => [
  ...searchInputLinks(),
  ...authenticatedApplication(),
  ...button(),
  ...logIn(),
  ...textInput(),
  ...thumbnail(),
];

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div
      style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}
      className="app_container"
    >
      {/* { isLoggedIn? (<Authentication header="Login" actionToTake="Sign Up" accountTag="Don’t have an account ?" authenticationFn={()=>{setIsLoggedIn(false)}} />):(<Authentication header="Sign Up" actionToTake="Login" accountTag="Already have an account?" authenticationFn={()=>{setIsLoggedIn(true)}} />) }   */}

      <AuthenticatedApplication />
    </div>
  );
}
