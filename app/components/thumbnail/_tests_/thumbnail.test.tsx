import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react";
import {Thumbnail} from "../thumbnail"
import testImage from "../../../../public/assets/thumbnails/dogs/regular/large.jpg"

describe("Tests for Thumbnail Component", ()=>{

  test("The Thumbnail will be rendered succesfully",()=>{
render(<Thumbnail image = {testImage} />)

   const thumbnailElement = screen.getByTestId("thumbnail")
   expect(thumbnailElement).toBeInTheDocument

  })  

  test("test that tumbnail image is rendered successfully",()=>{

    

    render(<Thumbnail image = {testImage}  />)


    const displayedImage = document.querySelector("img") as HTMLImageElement;

    expect(displayedImage).toBeInTheDocument
    expect(displayedImage.src).toContain("/dogs/regular/large")
    expect(displayedImage.src).toEqual("http://localhost/public/assets/thumbnails/dogs/regular/large.jpg")
    expect(displayedImage.alt).toEqual(testImage)})

    test("test on play Icon",async ()=>{

      render(<Thumbnail image = {testImage}  />)
      
      
      
      
      
      
      
      
      
      
      
      fireEvent.mouseOver(screen.getByTestId('thumbnail'));

      expect(screen.getByTestId('playIcon')).not.toBeInTheDocument
      
      expect(screen.getByTestId("bookmark_icon")).not.toBeInTheDocument
      
      await waitFor(() => {

        //test for Thumbnail Image
      const iconImage = document.querySelector(".image") as HTMLImageElement;
      expect(iconImage.src).toEqual("http://localhost/public/assets/iconPlay.svg")
      expect(iconImage.alt).toEqual("thumbnail")
        
        //tests for play Icon
        const playIcon =screen.getByTestId('playIcon')
        expect(playIcon).toBeInTheDocument

        //test for "Play" tag text
        expect(screen.getByText("Play")).toBeInTheDocument


        //tests for bookmark Icon
        expect(screen.getByTestId("bookmark_icon")).toBeInTheDocument
        expect(screen.getByTestId("bookmark_icon")).toBeInTheDocument

      })
    })
})