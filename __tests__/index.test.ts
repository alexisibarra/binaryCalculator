import { binaryToInteger, integerToBinary } from "../src/index";

describe("integerToBinary", () => {
  describe("converts any integer to binary", () => {
    test.each([[24], [34], [245], [256], [128], [12]])(
      "should convert to binary",
      (integerNumber) => {
        expect(integerToBinary(integerNumber)).toEqual(
          integerNumber.toString(2)
        );
      }
    );
  });
});

describe("binaryToInteger", () => {
  describe("converts any binary to integer", () => {
    test.each([[0], [24], [34], [245], [256], [128], [12]])(
      "should convert to binary",
      (integerNumber) => {
        expect(binaryToInteger(integerNumber.toString(2))).toEqual(
          integerNumber
        );
      }
    );
  });
});
