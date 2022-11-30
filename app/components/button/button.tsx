import React from 'react'
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type buttonProps = {
  buttonName: string
  authenticationFn : ()=> void
}

export const Button =(props: buttonProps)=> {
const {buttonName, authenticationFn} = props

  return (
    <button 
    data-testid="button_element" className='primary_button' onClick={authenticationFn} >{buttonName}</button>
  )
}

