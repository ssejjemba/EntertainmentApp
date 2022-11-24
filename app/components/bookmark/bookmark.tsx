
import React, { useState } from 'react'
import styles from "./styles.css"
import idleBookmarkicon from "../../../public/assets/idle-bookmark--icon.svg"

export const links = () => [{ rel: "stylesheet", href: styles }];


type bookmarkProps = {
    image : string
}
    
    export const   Bookmark=(props:bookmarkProps) =>{
      const {image} = props 
  
      const [bookmarkState, setBookmarkState] = useState("idle")

      const handleBookmarkMouseEnter = ()=>{
        setBookmarkState("idle")
        console.log(bookmarkState)
      }
      const handleBookmarkClick = ()=>{
        if(bookmarkState === "hover"){
          setBookmarkState("active")
        }
        
        if(bookmarkState === "active"){
          setBookmarkState("hover")
        }
        console.log(bookmarkState)
      }
      const handleBookmarkMouseLeave = ()=>{
        setBookmarkState("hover")
        console.log(bookmarkState)
      }


//   console.log(cardState)
  
    return (
    <div data-testid="bookmark" className='bookmark_container'>
        <img src={image} alt="bookmark" className='bookmark_image' onMouseEnter={handleBookmarkMouseEnter} onMouseLeave={handleBookmarkMouseLeave} onClick={handleBookmarkClick} />
        <img src={idleBookmarkicon} alt="" className='bookmark_icon' />

    </div>
  )
}
