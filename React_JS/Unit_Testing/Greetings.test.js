import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Redering text", () => {
    render(<Greetings />);
    const textData = screen.getByText("HELLO WORLD...!");
    expect(textData).toBeInTheDocument();
}) 