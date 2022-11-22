
import React, { useState } from 'react'
import styles from "./styles.css"
import idleBookmarkicon from "../../../public/assets/idle-bookmark--icon.svg"

export const links = () => [{ rel: "stylesheet", href: styles }];


type bookmarkProps = {
    image : string
}




const [first, setfirst] = useState("idle")

// const handleBookmarkHover = ()=>{
//   setCardState("hover")
// }

// const handleBookmarkClick =()=>{
  
// }

export const   Bookmark=(props:bookmarkProps) =>{
  const {image} = props 

//   console.log(cardState)
  
    return (
    <div data-testid="bookmark" className='bookmark_container'>
        <img src={image} alt="bookmark" className='bookmark_image' />
        <img src={idleBookmarkicon} alt="" className='bookmark_icon' />

    </div>
  )
}
