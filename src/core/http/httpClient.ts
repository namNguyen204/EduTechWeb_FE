import type {
  ErrorInterceptor,
  HttpClientOptions,
  HttpErrorPayload,
  HttpMethod,
  HttpRequestConfig,
  HttpResponse,
  HttpResponseType,
  QueryParams,
  RequestInterceptor,
  ResponseInterceptor,
} from "./types";

function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

function toQueryString(params?: QueryParams): string {
  if (!params) {
    return "";
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null) {
          searchParams.append(key, item instanceof Date ? item.toISOString() : String(item));
        }
      });
      return;
    }

    searchParams.append(key, value instanceof Date ? value.toISOString() : String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

function mergeHeaders(base?: HeadersInit, override?: HeadersInit): Headers {
  const result = new Headers(base ?? undefined);
  const overrideHeaders = new Headers(override ?? undefined);

  overrideHeaders.forEach((value, key) => {
    result.set(key, value);
  });

  return result;
}

function parseByType(response: Response, responseType: HttpResponseType): Promise<unknown> {
  switch (responseType) {
    case "text":
      return response.text();
    case "blob":
      return response.blob();
    case "arrayBuffer":
      return response.arrayBuffer();
    case "formData":
      return response.formData();
    case "raw":
      return Promise.resolve(response);
    default:
      return response.json();
  }
}

function detectResponseType(response: Response, configured?: HttpResponseType): HttpResponseType {
  if (configured) {
    return configured;
  }

  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (contentType.includes("application/json")) {
    return "json";
  }

  return "text";
}

async function safeParseResponse(
  response: Response,
  responseType?: HttpResponseType,
): Promise<unknown> {
  const finalType = detectResponseType(response, responseType);

  if (response.status === 204 || response.status === 205) {
    return null;
  }

  try {
    return await parseByType(response, finalType);
  } catch {
    return null;
  }
}

function createTimeoutSignal(
  timeoutMs: number,
  externalSignal?: AbortSignal,
): { signal: AbortSignal; cleanup: () => void } {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  const onAbort = () => controller.abort();
  externalSignal?.addEventListener("abort", onAbort);

  return {
    signal: controller.signal,
    cleanup: () => {
      window.clearTimeout(timeoutId);
      externalSignal?.removeEventListener("abort", onAbort);
    },
  };
}

export class HttpClient {
  private readonly options: HttpClientOptions;
  private readonly requestInterceptors: RequestInterceptor[] = [];
  private readonly responseInterceptors: ResponseInterceptor[] = [];
  private readonly errorInterceptors: ErrorInterceptor[] = [];

  constructor(options: HttpClientOptions = {}) {
    this.options = options;
  }

  addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    this.requestInterceptors.push(interceptor);
    return () => {
      const index = this.requestInterceptors.indexOf(interceptor);
      if (index >= 0) {
        this.requestInterceptors.splice(index, 1);
      }
    };
  }

  addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    this.responseInterceptors.push(interceptor);
    return () => {
      const index = this.responseInterceptors.indexOf(interceptor);
      if (index >= 0) {
        this.responseInterceptors.splice(index, 1);
      }
    };
  }

  addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    this.errorInterceptors.push(interceptor);
    return () => {
      const index = this.errorInterceptors.indexOf(interceptor);
      if (index >= 0) {
        this.errorInterceptors.splice(index, 1);
      }
    };
  }

  async request<TResponse = unknown, TBody = unknown>(
    config: HttpRequestConfig<TBody>,
  ): Promise<TResponse> {
    const response = await this.requestFull<TResponse, TBody>(config);
    return response.data;
  }

  async requestFull<TResponse = unknown, TBody = unknown>(
    config: HttpRequestConfig<TBody>,
  ): Promise<HttpResponse<TResponse>> {
    const preparedConfig = await this.applyRequestInterceptors(config);
    const method = (preparedConfig.method ?? "GET") as HttpMethod;
    const baseURL = preparedConfig.baseURL ?? this.options.baseURL ?? "";
    const url = isAbsoluteUrl(preparedConfig.url)
      ? `${preparedConfig.url}${toQueryString(preparedConfig.params)}`
      : `${baseURL}${preparedConfig.url}${toQueryString(preparedConfig.params)}`;

    const headers = mergeHeaders(this.options.headers, preparedConfig.headers);
    const hasJsonBody =
      preparedConfig.data !== undefined &&
      !(preparedConfig.data instanceof FormData) &&
      !(preparedConfig.data instanceof Blob);

    if (hasJsonBody && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const timeoutMs = preparedConfig.timeoutMs ?? this.options.timeoutMs ?? 15_000;
    const { signal, cleanup } = createTimeoutSignal(timeoutMs, preparedConfig.signal);

    try {
      const response = await fetch(url, {
        method,
        headers,
        signal,
        credentials: preparedConfig.credentials ?? this.options.credentials,
        body:
          preparedConfig.data === undefined
            ? undefined
            : hasJsonBody
              ? JSON.stringify(preparedConfig.data)
              : (preparedConfig.data as BodyInit),
      });

      const data = await safeParseResponse(response, preparedConfig.responseType);

      const normalized: HttpResponse<TResponse> = {
        data: data as TResponse,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: preparedConfig,
        raw: response,
      };

      if (!response.ok) {
        const error: HttpErrorPayload = {
          message: `Request failed with status ${response.status}`,
          status: response.status,
          statusText: response.statusText,
          url,
          method,
          data,
          config: preparedConfig,
        };

        await this.applyErrorInterceptors(error);
        throw error;
      }

      return this.applyResponseInterceptors(normalized);
    } catch (error) {
      if (this.isHttpErrorPayload(error)) {
        throw error;
      }

      const fallback: HttpErrorPayload = {
        message:
          error instanceof Error
            ? error.message
            : "Unexpected network error while calling API",
        status: 0,
        statusText: "NETWORK_ERROR",
        url,
        method,
        config: preparedConfig,
      };

      await this.applyErrorInterceptors(fallback);
      throw fallback;
    } finally {
      cleanup();
    }
  }

  get<TResponse = unknown>(
    url: string,
    config: Omit<HttpRequestConfig, "url" | "method" | "data"> = {},
  ): Promise<TResponse> {
    return this.request<TResponse>({ ...config, url, method: "GET" });
  }

  post<TResponse = unknown, TBody = unknown>(
    url: string,
    data?: TBody,
    config: Omit<HttpRequestConfig<TBody>, "url" | "method" | "data"> = {},
  ): Promise<TResponse> {
    return this.request<TResponse, TBody>({ ...config, url, method: "POST", data });
  }

  put<TResponse = unknown, TBody = unknown>(
    url: string,
    data?: TBody,
    config: Omit<HttpRequestConfig<TBody>, "url" | "method" | "data"> = {},
  ): Promise<TResponse> {
    return this.request<TResponse, TBody>({ ...config, url, method: "PUT", data });
  }

  patch<TResponse = unknown, TBody = unknown>(
    url: string,
    data?: TBody,
    config: Omit<HttpRequestConfig<TBody>, "url" | "method" | "data"> = {},
  ): Promise<TResponse> {
    return this.request<TResponse, TBody>({ ...config, url, method: "PATCH", data });
  }

  delete<TResponse = unknown>(
    url: string,
    config: Omit<HttpRequestConfig, "url" | "method" | "data"> = {},
  ): Promise<TResponse> {
    return this.request<TResponse>({ ...config, url, method: "DELETE" });
  }

  private async applyRequestInterceptors(
    config: HttpRequestConfig,
  ): Promise<HttpRequestConfig> {
    let current = { ...config };

    for (const interceptor of this.requestInterceptors) {
      current = await interceptor(current);
    }

    return current;
  }

  private async applyResponseInterceptors<TData>(
    response: HttpResponse<TData>,
  ): Promise<HttpResponse<TData>> {
    let current = response;

    for (const interceptor of this.responseInterceptors) {
      current = await interceptor(current);
    }

    return current;
  }

  private async applyErrorInterceptors(error: HttpErrorPayload): Promise<void> {
    for (const interceptor of this.errorInterceptors) {
      await interceptor(error);
    }
  }

  private isHttpErrorPayload(value: unknown): value is HttpErrorPayload {
    if (typeof value !== "object" || value === null) {
      return false;
    }

    const maybePayload = value as Partial<HttpErrorPayload>;
    return (
      typeof maybePayload.message === "string" &&
      typeof maybePayload.status === "number" &&
      typeof maybePayload.statusText === "string"
    );
  }
}
