import { apiClient, setAccessToken } from "../core/http";
import type { LoginRequest } from "../types/request";
import type { LoginResponse, LoginResponseData } from "../types/response";

const AUTH_ENDPOINTS = {
  login: "/auth/email/login",
  me: "/auth/me",
  logout: "/auth/logout",
  refresh: "/auth/refresh",
} as const;

export const authService = {
  async login(payload: LoginRequest): Promise<LoginResponseData> {
    const response = await apiClient.post<LoginResponse, LoginRequest>(
      AUTH_ENDPOINTS.login,
      payload,
    );

    // Extract data from wrapped response
    const loginData = response.data;
    
    // Set access token
    setAccessToken(loginData.accessToken);
    
    return loginData;
  },
};
