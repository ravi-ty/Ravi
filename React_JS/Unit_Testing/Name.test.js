import { render, screen } from "@testing-library/react";
import Name from "./Name";

describe("Render Info", () => {
    
    test("Render Name", () => {
        render(<Name />);
        const name = screen.getByText("I am Ravi");
        expect(name).toBeInTheDocument();
    });
    
    test("Render City", () => {
        render(<Name />);
        const city = screen.getByText("From Hyderabad");
        expect(city).toBeInTheDocument();
    });
})