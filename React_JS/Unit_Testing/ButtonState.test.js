import ButtonState from "./ButtonState";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Change Text", () => {
    render(<ButtonState />);
    const text = screen.getByText("Watch in Theater");
    expect(text).toBeInTheDocument();
})

test("Button Click Event", () => {
    render(<ButtonState />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const txt = screen.getByText("Watch in IMAX");
    expect(txt).toBeInTheDocument();
})

test("Remove Text", () => {
    render(<ButtonState />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const txt = screen.queryByText("Watch in Theater");
    expect(txt).toBeNull();
})