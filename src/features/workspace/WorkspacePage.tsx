import type { RouteMeta, UserRole } from "../../shared/types/page";
import { getRoleNavigation } from "../../shared/lib/roleNavigation";
import { resolveWorkspacePreset } from "./workspacePresets";
import "../../styles/pages/WorkspaceBase.scss";

interface WorkspacePageProps {
  route: RouteMeta;
}

const roleBadgeClass: Record<UserRole, string> = {
  public: "workspace-page__role-badge workspace-page__role-badge--public",
  student: "workspace-page__role-badge workspace-page__role-badge--student",
  teacher: "workspace-page__role-badge workspace-page__role-badge--teacher",
  parent: "workspace-page__role-badge workspace-page__role-badge--parent",
  admin: "workspace-page__role-badge workspace-page__role-badge--admin",
};

const quickActions = [
  "Review trạng thái hôm nay",
  "Đồng bộ lộ trình tuần",
  "Theo dõi hiệu suất lớp",
  "Kiểm tra cảnh báo AI",
];

export function WorkspacePage({ route }: WorkspacePageProps) {
  const navigation = getRoleNavigation(route.role);
  const preset = resolveWorkspacePreset(route.key);
  const pageClass = `workspace-page workspace-page--${route.key}`;

  return (
    <main className={pageClass}>
      <aside className="workspace-page__sidebar">
        <a href="/" className="workspace-page__brand">
          <span className="workspace-page__brand-mark" />
          BachKhoaViet
        </a>

        <div className="workspace-page__nav">
          {navigation.map((item) => {
            const isActive = item.href === route.ctaHref;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`workspace-page__nav-link ${
                  isActive ? "workspace-page__nav-link--active" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="workspace-page__sidebar-card">
          <p className="workspace-page__sidebar-label">Workspace</p>
          <p className="workspace-page__sidebar-title">{preset.badge}</p>
          <p className="workspace-page__sidebar-note">Chuẩn hóa theo SCSS component system</p>
        </div>
      </aside>

      <section className="workspace-page__main">
        <div className="workspace-page__hero-card">
          <div className="workspace-page__hero-tags">
            <span className={roleBadgeClass[route.role]}>
              {route.role}
            </span>
            <span className="workspace-page__preset-badge">
              {preset.badge}
            </span>
          </div>

          <h1>{route.title}</h1>
          <p>{route.subtitle}</p>
        </div>

        <div className="workspace-page__content-grid">
          <article className="workspace-page__main-card">
            <div className="workspace-page__kpi-row">
              <p>{preset.kpiLabel}</p>
              <strong>{preset.kpiValue}</strong>
            </div>

            <h2>{preset.panelTitle}</h2>
            <p>{preset.panelDescription}</p>

            <ul className="workspace-page__highlights">
              {preset.highlights.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <a href={route.ctaHref} className="btn btn-primary workspace-page__cta">
              {route.ctaLabel}
            </a>
          </article>

          <aside className="workspace-page__side-card">
            <h3>Quick actions</h3>
            <ul>
              {quickActions.map((action) => (
                <li key={action}>
                  {action}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
