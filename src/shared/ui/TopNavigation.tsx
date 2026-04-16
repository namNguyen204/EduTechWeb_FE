const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Học sinh", href: "/student" },
  { label: "Giáo viên", href: "/teacher" },
  { label: "Phụ huynh", href: "/parent" },
  { label: "Quản trị", href: "/admin-analytics" },
];

export function TopNavigation() {
  return (
    <header className="top-nav">
      <div className="top-nav__inner container-wide">
        <a href="/" className="top-nav__brand">
          <span className="top-nav__logo-mark" />
          BachKhoaViet
        </a>

        <nav className="top-nav__links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="top-nav__link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="top-nav__actions">
          <a href="/signup" className="btn btn-muted">
            Đăng ký
          </a>
          <a href="/login" className="btn btn-primary">
            Đăng nhập
          </a>
        </div>
      </div>
    </header>
  );
}
