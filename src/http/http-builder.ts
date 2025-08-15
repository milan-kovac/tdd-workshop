import axios, { AxiosRequestConfig } from "axios";
import { HttpBuilderPort } from "../ports";
import { ErrorHandler } from "../errors";

export class HttpBuilder implements HttpBuilderPort {
  private baseUrl: string = "";
  private path: string = "";
  private method: "GET" | "POST" | "PUT" | "DELETE" = "GET";
  private params: Record<string, any> = {};
  private headers: Record<string, string> = {};

  setBaseUrl(url: string): this {
    this.baseUrl = url;
    return this;
  }

  setPath(path: string): this {
    this.path = path;
    return this;
  }

  setMethod(method: "GET" | "POST" | "PUT" | "DELETE"): this {
    this.method = method;
    return this;
  }

  setParams(params: Record<string, any>): this {
    this.params = params;
    return this;
  }

  setHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  async send<T>(): Promise<T> {
    const url = `${this.baseUrl}${this.path}`;

    const config: AxiosRequestConfig = {
      url,
      method: this.method,
      headers: this.headers,
      params: this.method === "GET" ? this.params : undefined,
      data: this.method !== "GET" ? this.params : undefined,
    };

    try {
      const response = await axios.request<T>(config);
      return response.data;
    } catch (error) {
      ErrorHandler.handle(error);
    }
  }
}
