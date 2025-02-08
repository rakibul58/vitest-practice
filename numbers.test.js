import { expect, it } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of numbers if an array of strings is passed", () => {
  const inputNumbers = ["1", "2", "3"];
  const result = cleanNumbers(inputNumbers);
  expect(result[0]).toBeTypeOf("number");
});

it("should throw an error if an empty string is passed", () => {
  const inputNumbers = ["", "2"];
  const resultFn = () => cleanNumbers(inputNumbers);
  expect(resultFn).toThrow();
});
