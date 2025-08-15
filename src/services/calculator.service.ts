import { CalculatorServicePort } from "../ports";

export class CalculatorService implements CalculatorServicePort {
  add(a: number, b: number): number {
    throw new Error("Method not implemented.");
  }
  subtract(a: number, b: number): number {
    throw new Error("Method not implemented.");
  }
}
