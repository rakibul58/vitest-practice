import { beforeEach, expect, it } from "vitest";
import { User } from "./hook";

const testEmail = "test@test.com";
let user;
beforeEach(() => {
  user = new User(testEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should update the email", () => {
  const newTestEmail = "test2@test.com";

  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});
