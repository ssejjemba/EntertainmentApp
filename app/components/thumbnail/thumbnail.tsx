import React, { useState } from "react"
import styles from "./styles.css"
import playIcon from "../../../public/assets/iconPlay.svg"
import idleBookmarkicon from "../../../public/assets/idle-bookmark--icon.svg"

export const links = () => [{ rel: "stylesheet", href: styles }];


type thumbnailProps = {
    image : string
}

export const Thumbnail = (props : thumbnailProps)=>{

    const {image} = props

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };

      const handleMouseOut = () => {
        setIsHovering(false);
      };

     

    return(
        <div data-testid = "thumbnail" className="thumbnail_container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
            <img src={image} alt={image} className="thumbnail_image"  />
            {
                isHovering&&(<div 
                    data-testid="playIcon" 
                className="play_icon--container" onMouseOver={handleMouseOver}>
                <img src={playIcon} alt="thumbnail"  className="image" />
                <p className="play_tag" >Play</p>
                </div>)
            }

       <img src={idleBookmarkicon} alt="" className='bookmark_icon' data-testid="bookmark_icon" />

        </div>
    )
}
