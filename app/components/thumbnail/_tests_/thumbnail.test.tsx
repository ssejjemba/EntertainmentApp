import { render, screen } from "@testing-library/react"
import React from "react";
import {Thumbnail} from "../thumbnail"

describe("Tests for Thumbnail Component", ()=>{

  test("The Thumbnail will be rendered succesfully",()=>{
render(<Thumbnail/>)

   const thumbnailElement = screen.getByTestId("thumbnail")
   expect(thumbnailElement).toBeInTheDocument

  })  

})