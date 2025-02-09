import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJS from "crypto-js";

beforeAll(() => {
  console.log("Before all tests");
});

afterAll(() => {
  console.log("After all tests");
});

beforeEach(() => {
  console.log("Before each test");
});

afterEach(() => {
  console.log("After each test");
});

it("should encrypt a message", async () => {
  const message = "Hello, World!";
  const secretKey = "339893884";
  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(message, secretKey, (encryptedMessage) => {
      resolve(encryptedMessage);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should also pass", async () => {
  const message = "Hello, World!";
  const secretKey = "339893884";

  const encryptedData = await encryptMessagePromise(message, secretKey);
  expect(encryptedData).toBeDefined();
});

it("should encrypt the message correctly", async () => {
  const message = "Hello, World!";
  const secretKey = "339893884";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  const decryptedMessage = CryptoJS.AES.decrypt(
    encryptedData,
    secretKey
  ).toString(CryptoJS.enc.Utf8);
  expect(decryptedMessage).toBe(message);
});
