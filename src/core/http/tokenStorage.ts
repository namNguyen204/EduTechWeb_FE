const ACCESS_TOKEN_KEY = "access_token";

export function getAccessToken(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
}

export function setAccessToken(token: string): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function clearAccessToken(): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
