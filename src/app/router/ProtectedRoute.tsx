import type { ComponentType } from "react";
import { getUserRole, isUserLoggedIn } from "../../core/http";

export type AllowedRoles = "STUDENT" | "TEACHER" | "PARENT" | "ADMIN";

export interface ProtectedRouteConfig {
  allowedRoles: AllowedRoles[];
  fallbackPath?: string;
}

export function withProtectedRoute(
  Component: ComponentType,
  config: ProtectedRouteConfig,
): ComponentType {
  const { allowedRoles, fallbackPath = "/login" } = config;

  return function ProtectedRoute() {
    if (!isUserLoggedIn()) {
      window.location.href = fallbackPath;
      return null;
    }

    const userRole = getUserRole();
    if (!userRole || !allowedRoles.includes(userRole)) {
      window.location.href = fallbackPath;
      return null;
    }

    return <Component />;
  };
}
