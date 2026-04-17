import { useMemo } from "react";
import { normalizePath } from "../../shared/lib/normalizePath";
import { TopNavigation } from "../../shared/ui/TopNavigation";
import { pageRegistry } from "./pageRegistry";

function matchRoute(pathname: string): string | null {
  const normalized = normalizePath(pathname);
  
  // Try exact match first
  if (pageRegistry[normalized]) {
    return normalized;
  }

  // Try pattern matching for dynamic routes
  const segments = normalized.split("/").filter(Boolean);
  
  // Check for /teacher/courses/:courseId pattern
  if (segments.length === 3 && segments[0] === "teacher" && segments[1] === "courses") {
    if (pageRegistry["/teacher/courses/:courseId"]) {
      return "/teacher/courses/:courseId";
    }
  }

  // Check for /teacher/courses/:courseId/edit pattern
  if (segments.length === 4 && segments[0] === "teacher" && segments[1] === "courses" && segments[3] === "edit") {
    if (pageRegistry["/teacher/courses/:courseId/edit"]) {
      return "/teacher/courses/:courseId/edit";
    }
  }

  // Check for /teacher/subjects/:subjectId pattern
  if (segments.length === 3 && segments[0] === "teacher" && segments[1] === "subjects") {
    if (pageRegistry["/teacher/subjects/:subjectId"]) {
      return "/teacher/subjects/:subjectId";
    }
  }

  return null;
}

export function AppRouter() {
  const routeEntry = useMemo(() => {
    const pathname = normalizePath(window.location.pathname);
    const matchedRoute = matchRoute(window.location.pathname);
    return pageRegistry[matchedRoute || pathname] ?? pageRegistry["/"];
  }, []);

  const ActivePage = routeEntry.component;
  const isWorkspace = routeEntry.kind === "workspace";

  return (
    <div className="app-shell">
      {!isWorkspace && <TopNavigation />}
      <ActivePage />
    </div>
  );
}
