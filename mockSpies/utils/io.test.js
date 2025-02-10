import { expect, it, vi } from "vitest";
import { saveTokenToFile } from "./io.js";
import { promises as fs } from "fs";

vi.mock("fs");

it("should store the token to the file", () => {
  const data = "dummy token";
  const fileName = "token.txt";
  saveTokenToFile(data, fileName);
  expect(fs.writeFile).toHaveBeenCalled();
});
