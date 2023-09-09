import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test Case", () => {
    test("Should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        const buttonText = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
        expect(buttonText).toBeInTheDocument();
    })
    
    test("Should load input name and message inside contact component", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        const inputMsg = screen.getByPlaceholderText("message");
        expect(inputName).toBeInTheDocument();
        expect(inputMsg).toBeInTheDocument();
    })
    
    test("Should load 2 input boxes on the contact component", () => {
        render(<Contact/>);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        // Assertion
        expect(inputBoxes.length).toBe(2);
    })
})