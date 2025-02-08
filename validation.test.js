import { expect, it, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
  it("should validate correct email addresses", () => {
    const email = "example@mail.com";
    const resultFn = () => validateEmail(email);
    expect(resultFn).not.toThrow();
  });

  it("should throw an error if invalid email is passed", () => {
    const email = "example";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });

  it("should throw an error if empty email is passed", () => {
    const email = "";
    const resultFn = () => validateEmail(email);
    expect(resultFn).toThrow();
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should validate a non-empty array", () => {
    const array = [1, 2, 3];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).not.toThrow();
  });

  it("should throw an error if an empty array is passed", () => {
    const array = [];
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).toThrow();
  });

  it("should throw an error if a non-array is passed", () => {
    const array = "string";
    const resultFn = () => validateArrayNotEmpty(array);
    expect(resultFn).toThrow();
  });
});
