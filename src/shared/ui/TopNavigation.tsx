const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Học sinh", href: "/student" },
  { label: "Giáo viên", href: "/teacher" },
  { label: "Phụ huynh", href: "/parent" },
  { label: "Quản trị", href: "/admin-analytics" },
];

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <a href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          BachKhoaViet
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/login"
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Đăng nhập
        </a>
      </div>
    </header>
  );
}
