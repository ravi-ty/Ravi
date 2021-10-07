const sum = require('./sum');

test('Sum of two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});