const isEqual = require("./check-if-equal.js");

test("isEqual tells us if two numbers are equal", () => {
  expect(isEqual(4, 4)).toBe(true);
  expect(isEqual(5, 4)).toBe(false);
  expect(isEqual(-4, 4)).toBe(false);
});
