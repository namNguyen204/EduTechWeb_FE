export function normalizePath(pathname: string): string {
  const path = pathname.toLowerCase().replace(/\/+$/, "");
  return path || "/";
}
