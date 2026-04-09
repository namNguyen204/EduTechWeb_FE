import { useMemo } from "react";
import { AuthPage } from "../../features/auth/AuthPage";
import { HomeLandingPage } from "../../features/home/HomeLandingPage";
import { WorkspacePage } from "../../features/workspace/WorkspacePage";
import { normalizePath } from "../../shared/lib/normalizePath";
import { TopNavigation } from "../../shared/ui/TopNavigation";
import { routeTable } from "./routes";

export function AppRouter() {
  const currentRoute = useMemo(() => {
    const pathname = normalizePath(window.location.pathname);
    return routeTable[pathname] ?? routeTable["/"];
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <TopNavigation />

      {currentRoute.kind === "home" && <HomeLandingPage />}
      {currentRoute.kind === "auth" && <AuthPage />}
      {currentRoute.kind === "workspace" && <WorkspacePage route={currentRoute} />}
    </div>
  );
}
