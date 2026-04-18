const USER_SESSION_KEY = "user_session";
const ACCESS_TOKEN_KEY = "access_token";

export interface UserSession {
  userId: string;
  email: string;
  role: "STUDENT" | "TEACHER" | "PARENT" | "ADMIN";
  fullName: string;
  avatarUrl?: string;
}

export function getUserSession(): UserSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const sessionStr = sessionStorage.getItem(USER_SESSION_KEY);
  if (!sessionStr) {
    return null;
  }

  try {
    return JSON.parse(sessionStr);
  } catch {
    return null;
  }
}

export function setUserSession(user: UserSession): void {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
}

export function clearUserSession(): void {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.removeItem(USER_SESSION_KEY);
}

export function isUserLoggedIn(): boolean {
  const session = getUserSession();
  return session !== null;
}

export function getUserRole(): "STUDENT" | "TEACHER" | "PARENT" | "ADMIN" | null {
  const session = getUserSession();
  return session?.role ?? null;
}
