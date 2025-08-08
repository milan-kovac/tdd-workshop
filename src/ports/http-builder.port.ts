export interface HttpBuilderPort {
  setBaseUrl(url: string): this;
  setPath(path: string): this;
  setMethod(method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"): this;
  setParams(params: Record<string, any>): this;
  setHeader(key: string, value: string): this;
  send<T>(): Promise<T>;
}
