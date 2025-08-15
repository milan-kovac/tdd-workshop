import { TextServicePort } from "../ports";

export class TextService implements TextServicePort {
  repeat(text: string, times: number): string {
    throw new Error("Method not implemented.");
  }
}
