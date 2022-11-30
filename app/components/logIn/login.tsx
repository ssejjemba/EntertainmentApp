import React from 'react'
import { TextInput } from '../Inputs/text/TextInput';
import styles from "./styles.css";
import { validateEmail } from "../../utils/helper"
import { Button } from '../button/button';

export const links = () => [{ rel: "stylesheet", href: styles }];

type logInProps = {
  header: string,
  accountTag: string,
  actionToTake: string,
  authenticationFn: ()=>void
}

export const Authentication =(props: logInProps)=> {

  const {header, actionToTake, accountTag, authenticationFn} = props

  return (
    <div className='logIn_container' >
      <h1 className='logIn_header' >{header}</h1>
      <TextInput type='email' placeholder='Email Address' validationFn={validateEmail}  />
      <TextInput type='password' placeholder='Password' />
      <Button buttonName="Login to your account" authenticationFn={authenticationFn}   />
      <div className='logIn_account--tag' >{accountTag}<span className='signUp' >{actionToTake}</span></div>
    </div>
  )
}


