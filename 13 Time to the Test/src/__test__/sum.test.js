const { sum } = require("../components/sum");

test("should sum", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
