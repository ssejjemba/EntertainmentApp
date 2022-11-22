
import { render, screen } from '@testing-library/react';
import React from 'react';
import {Bookmark} from "../bookmark"
import bookmarkImage from "../../../../public/assets/thumbnails/bottom-gear/regular/large.jpg"



describe("Tests for Bookmark Component",()=>{


    test("Bookmark component will be in the dom",()=>{
        
    render(<Bookmark image={bookmarkImage} />)

    const bookmark = screen.getByTestId("bookmark")

    expect(bookmark).toBeInTheDocument

    })

    test("Bookmark componet renders with Image",()=>{

        render(<Bookmark image={bookmarkImage} />)



    const Image = document.querySelector("img") as HTMLImageElement;

    expect(Image).toBeInTheDocument
    expect(Image.alt).toEqual("bookmark")
    expect(Image.src).toBe("http://localhost/public/assets/thumbnails/bottom-gear/regular/large.jpg")
    expect(document.querySelector(".bookmark_image")).toBeInTheDocument

    })

})