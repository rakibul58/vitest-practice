import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum for array of numbers", () => {
  const numbers = [1, 2, 3, 7];
  const expectedResult = numbers.reduce((acc, curr) => acc + curr, 0);
  const result = add(numbers);
  expect(result).toBe(expectedResult);
});

it("should provide NaN if at least one invalid number is provided", () => {
  const numbers = [1, "invalid", 3, 7];
  const result = add(numbers);
  expect(result).toBeNaN();
});

it("should provide the correct sum if an array of numeric string is provided", () => {
  const numbers = ["1", "2", "3", "7"];
  const expectedResult = numbers.reduce((acc, curr) => acc + +curr, 0);
  const result = add(numbers);
  expect(result).toBe(expectedResult);
});

it("should through an error if no argument is provided", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should through an error if multiple arguments are provided", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow(/is not iterable/i);
});
