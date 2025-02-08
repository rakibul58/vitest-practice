function validateStringNotEmpty(string) {
  if (string === "") {
    throw new Error("String is empty");
  }
}

function transformToNumber(string) {
  return +string;
}

function validateNumber(number) {
  if (Number.isNaN(number)) {
    throw new Error("Invalid number");
  }
}

export function cleanNumbers(inputNumbers) {
  const numbers = [];
  for (const inputNumber of inputNumbers) {
    validateStringNotEmpty(inputNumber);
    const number = transformToNumber(inputNumber);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
