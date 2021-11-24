import { render, screen } from "@testing-library/react";
import Async from "./Async";

test("Fetching Data", async () => {
    render(<Async />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
})