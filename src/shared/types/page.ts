export type UserRole = "public" | "student" | "teacher" | "parent" | "admin";

export type PageKind = "home" | "auth" | "workspace";

export interface RouteMeta {
  kind: PageKind;
  key: string;
  title: string;
  subtitle: string;
  role: UserRole;
  ctaLabel: string;
  ctaHref: string;
}
