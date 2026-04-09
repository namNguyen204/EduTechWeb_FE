import { useMemo } from "react";
import { normalizePath } from "../../shared/lib/normalizePath";
import { TopNavigation } from "../../shared/ui/TopNavigation";
import { pageRegistry } from "./pageRegistry";

export function AppRouter() {
  const routeEntry = useMemo(() => {
    const pathname = normalizePath(window.location.pathname);
    return pageRegistry[pathname] ?? pageRegistry["/"];
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
