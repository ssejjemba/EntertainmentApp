import { render, screen } from "@testing-library/react"
import React from "react";
import {Button} from "../button"


describe("Button component tests",()=>{
    test("will render succesfully",()=>{
        render(<Button buttonName="2"/>)

        const buttonElement = screen.getByTestId("button_element")
        expect(buttonElement).toBeInTheDocument
    })

    test("succesfully renders the button name",()=>{
        render(<Button buttonName="Arthur"/>)
    
    const buttonText = screen.getByText(/Arthur/i)
    expect(buttonText).toBeInTheDocument

    })
})