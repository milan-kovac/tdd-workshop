import axios, { AxiosError } from "axios";
import { HttpError } from "./http.error";
import { ErrorMessages, HttpStatusMessages } from "./types.error";

export class ErrorHandler {
  static handle(error: unknown): never {
    if (axios.isAxiosError(error)) {
      throw ErrorHandler.buildAxiosError(error);
    }

    throw new HttpError(ErrorMessages.UnknownError, 999, error);
  }

  private static buildAxiosError(error: AxiosError): HttpError {
    const status = error.response?.status;
    const data = error.response?.data;

    const message = status && HttpStatusMessages[status] ? HttpStatusMessages[status] : ErrorMessages.UnknownError;
    const statusCode = status ?? 999;

    return new HttpError(message, statusCode, data);
  }
}
