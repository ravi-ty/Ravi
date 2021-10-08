const counting = require("./counting");

it("Counting functionality", () => {
	expect(counting(1)).toBe(1);
	expect(counting(1)).toBe(2);
	expect(counting(1)).toBe(3);
	expect(counting(1)).toBe(4);
	expect(counting(-1)).toBe(3);
	expect(counting(-1)).toBe(2);
	expect(counting(0)).toBe(0);
	expect(counting(-1)).toBe(0);
});