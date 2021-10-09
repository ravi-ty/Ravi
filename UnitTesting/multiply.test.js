const multiply = require("./multiply");
const cases = [[2,4,8],[5,7,35],[56,0,0]];

describe("Multiply operation", () => {
	test.each(cases)("Passing two values",
	(arg1, arg2, result) => {
		expect(multiply(arg1,arg2)).toEqual(result);
	});
});