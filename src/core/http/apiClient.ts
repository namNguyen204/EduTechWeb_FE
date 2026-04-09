import { HttpClient } from "./httpClient";
import { clearAccessToken, getAccessToken } from "./tokenStorage";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";
const API_BASE_URL = "https://rest-api-edu-tech-with-nestjs-mongo.vercel.app/api/v1";

export const apiClient = new HttpClient({
  baseURL: API_BASE_URL,
  timeoutMs: 15_000,
  headers: {
    Accept: "application/json",
  },
});

apiClient.addRequestInterceptor((config) => {
  const token = getAccessToken();
  if (!token) {
    return config;
  }

  const headers = new Headers(config.headers ?? undefined);
  headers.set("Authorization", `Bearer ${token}`);

  return {
    ...config,
    headers,
  };
});

apiClient.addErrorInterceptor((error) => {
  if (error.status === 401) {
    clearAccessToken();
  }
});
