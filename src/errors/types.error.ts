export enum ErrorMessages {
  BadRequest = "Bad request",
  Unauthorized = "You are not authorized",
  Forbidden = "Forbidden",
  NotFound = "Resource not found",
  Conflict = "Conflict",
  ValidationFailed = "Validation failed",
  TooManyRequests = "Too many requests",
  ServerError = "Internal server error",
  ServiceUnavailable = "Service unavailable",
  GatewayTimeout = "Gateway timeout",
  UnknownError = "Unknown error occurred",
}

export const HttpStatusMessages: Record<number, string> = {
  400: ErrorMessages.BadRequest,
  401: ErrorMessages.Unauthorized,
  403: ErrorMessages.Forbidden,
  404: ErrorMessages.NotFound,
  409: ErrorMessages.Conflict,
  422: ErrorMessages.ValidationFailed,
  429: ErrorMessages.TooManyRequests,
  500: ErrorMessages.ServerError,
  503: ErrorMessages.ServiceUnavailable,
  504: ErrorMessages.GatewayTimeout,
  999: ErrorMessages.UnknownError,
};
