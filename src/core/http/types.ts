export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type QueryValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date;

export type QueryParams = Record<string, QueryValue | QueryValue[]>;

export type HttpResponseType =
  | "json"
  | "text"
  | "blob"
  | "arrayBuffer"
  | "formData"
  | "raw";

export interface HttpRequestConfig<TBody = unknown> {
  url: string;
  method?: HttpMethod;
  baseURL?: string;
  headers?: HeadersInit;
  params?: QueryParams;
  data?: TBody;
  signal?: AbortSignal;
  timeoutMs?: number;
  credentials?: RequestCredentials;
  responseType?: HttpResponseType;
}

export interface HttpClientOptions {
  baseURL?: string;
  headers?: HeadersInit;
  timeoutMs?: number;
  credentials?: RequestCredentials;
}

export interface HttpResponse<TData = unknown> {
  data: TData;
  status: number;
  statusText: string;
  headers: Headers;
  config: HttpRequestConfig;
  raw: Response;
}

export interface HttpErrorPayload {
  message: string;
  status: number;
  statusText: string;
  url: string;
  method: HttpMethod;
  data?: unknown;
  config: HttpRequestConfig;
}

export type RequestInterceptor = (
  config: HttpRequestConfig,
) => HttpRequestConfig | Promise<HttpRequestConfig>;

export type ResponseInterceptor = <TData>(
  response: HttpResponse<TData>,
) => HttpResponse<TData> | Promise<HttpResponse<TData>>;

export type ErrorInterceptor = (
  error: HttpErrorPayload,
) => void | Promise<void>;
