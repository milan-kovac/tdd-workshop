import { CalculatorServicePort } from "../../src/ports";
import { CalculatorService } from "../../src/services/calculator.service";

describe("CalculatorService", () => {
  let service: CalculatorServicePort;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
