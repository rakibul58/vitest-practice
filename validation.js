export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
}

export function validateArrayNotEmpty(array) {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error("Array is empty");
  }
}
