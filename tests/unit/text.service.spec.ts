import { TextServicePort } from "../../src/ports";
import { TextService } from "../../src/services/text.service";

describe("TextService", () => {
  let service: TextServicePort;

  beforeEach(() => {
    service = new TextService();
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
