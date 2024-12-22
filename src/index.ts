type IntegerToBinary = (number: number) => string;

export const integerToBinary: IntegerToBinary = (number) => {
  if (number === 0) {
    return "";
  }

  const nextNumber = Math.floor(number / 2);
  const binaryDigit = number % 2;

  return `${integerToBinary(nextNumber)}${binaryDigit}`;
};

type BinaryToInteger = (binaryNumber: string) => number;

export const binaryToInteger: BinaryToInteger = (binaryNumber) => {
  if (binaryNumber.length === 0) {
    return 0;
  }

  const firstDigit = binaryNumber[0];
  const rest = binaryNumber.slice(1);

  return (
    Number(firstDigit) * 2 ** (binaryNumber.length - 1) + binaryToInteger(rest)
  );
};
