import { sum, multiply, subtract, divide } from "./math.js";

const sum = sum(1, 2);
const diff = subtract(1, 2);
const quotient = divide(1, 2);
const product = multiply(1, 2);

export default function mathLogger() {
  console.log("Sum: ", sum);
  console.log("Difference: ", diff);
  console.log("Quotient: ", quotient);
  console.log("Product: ", product);
}
