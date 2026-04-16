import { clearAccessToken, clearUserSession } from "../core/http";

export function logout(): void {
  // Clear tokens and session
  clearAccessToken();
  clearUserSession();

  // Redirect to login page
  window.location.href = "/login";
}

export function isAuthenticated(): boolean {
  const token = localStorage.getItem("access_token");
  return !!token;
}
