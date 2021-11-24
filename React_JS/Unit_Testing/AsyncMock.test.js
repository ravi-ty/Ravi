import { render, screen } from "@testing-library/react";
import Async from "./Async";

test("Fetching Data", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id:"p1", title:"First post"}]
    })
    render(<Async />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
})