import { WorkspacePage } from "../features/workspace/WorkspacePage";
import type { RouteMeta } from "../shared/types/page";

export function renderWorkspacePage(route: RouteMeta) {
  return <WorkspacePage route={route} />;
}
