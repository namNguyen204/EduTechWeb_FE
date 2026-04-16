import { apiClient, setAccessToken } from "../core/http";
import type { LoginRequest } from "../types/request";
import type { LoginResponse } from "../types/response";

const AUTH_ENDPOINTS = {
  login: "/auth/login",
  me: "/auth/me",
  logout: "/auth/logout",
  refresh: "/auth/refresh",
} as const;

export const authService = {
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse, LoginRequest>(
      AUTH_ENDPOINTS.login,
      payload,
    );

    setAccessToken(response.accessToken);
    return response;
  },
};
