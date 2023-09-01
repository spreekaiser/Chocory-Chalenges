import { add, subtract, multiply, divide } from "./index.js";

test("the add result of a and b", () => {
  const result = add(2, 5);
  expect(result).toBe(7);
});
test("the add result of a and b", () => {
  const result = add(-2, 5);
  expect(result).toBe(3);
});
test("the add result of a and b", () => {
  const result = add(2, -5);
  expect(result).toBe(-3);
});
test("the add result of a and b", () => {
  const result = add("2", 5);
  expect(result).toBe("25");
});

test("the subtration result of a and b", () => {
  const result = subtract(8, 4);
  expect(result).toBe(4);
});
test("the subtration result of a and b", () => {
  const result = subtract(-8, 4);
  expect(result).toBe(-12);
});
test("the subtration result of a and b", () => {
  const result = subtract(8, -4);
  expect(result).toBe(12);
});

test("the multiply result of a and b", () => {
  const result = multiply(3, 4);
  expect(result).toBe(12);
});
test("the multiply result of a and b", () => {
  const result = multiply(-3, 4);
  expect(result).toBe(-12);
});
test("the multiply result of a and b", () => {
  const result = multiply(3, -4);
  expect(result).toBe(-12);
});

test("the divition result of a and b", () => {
  const result = divide(10, 5);
  expect(result).toBe(2);
});
test("the divition result of a and b", () => {
  const result = divide(12, 5);
  expect(result).toBe(2.4);
});
test("the divition result of a and b", () => {
  const result = divide(10, -5);
  expect(result).toBe(-2);
});
test("the divition result of a and b", () => {
  const result = divide(-15, 5);
  expect(result).toBe(-3);
});
test("the divition result of a and b", () => {
  const result = divide(5, 0);
  expect(result).toBe("You should not do this!");
});
