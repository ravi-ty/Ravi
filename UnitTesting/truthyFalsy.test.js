const truthyFalsy = require("./truthyFalsy");

test("True value or False value", () => {
expect(truthyFalsy("abc")).toBe("Truthy");
expect(truthyFalsy(true)).toBe("Truthy");
expect(truthyFalsy("8"*8)).toBe("Truthy");
expect(truthyFalsy([])).toBe("Truthy");
expect(truthyFalsy("")).toBe("Falsy");
expect(truthyFalsy(false)).toBe("Falsy");
expect(truthyFalsy(0)).toBe("Falsy");
expect(truthyFalsy(undefined)).toBe("Falsy");
expect(truthyFalsy({})).toBe("Truthy");
expect(truthyFalsy(NaN)).toBe("Falsy");
expect(truthyFalsy(()=>{})).toBe("Truthy");
expect(truthyFalsy(null)).toBe("Falsy");
});