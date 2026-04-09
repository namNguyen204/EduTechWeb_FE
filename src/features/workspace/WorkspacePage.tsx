import type { RouteMeta, UserRole } from "../../shared/types/page";
import { PageContainer } from "../../shared/ui/PageContainer";

interface WorkspacePageProps {
  route: RouteMeta;
}

const roleBadgeClass: Record<UserRole, string> = {
  public: "bg-slate-100 text-slate-700",
  student: "bg-blue-100 text-blue-800",
  teacher: "bg-emerald-100 text-emerald-800",
  parent: "bg-violet-100 text-violet-800",
  admin: "bg-amber-100 text-amber-800",
};

const quickActions = [
  "Review trạng thái hôm nay",
  "Đồng bộ kế hoạch học tập",
  "Theo dõi hiệu suất tuần",
  "Kiểm tra cảnh báo hệ thống",
];

export function WorkspacePage({ route }: WorkspacePageProps) {
  return (
    <PageContainer title={route.title} subtitle={route.subtitle}>
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 p-5 lg:col-span-2">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${roleBadgeClass[route.role]}`}
            >
              {route.role}
            </span>
            <span className="text-xs text-slate-500">Key: {route.key}</span>
          </div>

          <h2 className="mt-4 text-xl font-semibold text-slate-900">Trang đã được chuẩn hóa theo layer</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Route hiện tại dùng metadata-driven rendering, giúp giảm lặp code giữa các page và dễ
            bảo trì theo chuẩn senior.
          </p>

          <a
            href={route.ctaHref}
            className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            {route.ctaLabel}
          </a>
        </article>

        <aside className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Quick actions</h3>
          <ul className="mt-3 space-y-2">
            {quickActions.map((action) => (
              <li key={action} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
                {action}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </PageContainer>
  );
}
