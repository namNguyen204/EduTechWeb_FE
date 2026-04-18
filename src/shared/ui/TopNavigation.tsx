import { isUserLoggedIn, getUserSession } from "../../core/http";
import { logout } from "../../services";
import { useState } from "react";

// const navItems = [
//   { label: "Trang chủ", href: "/" },
//   { label: "Học sinh", href: "/student" },
//   { label: "Giáo viên", href: "/teacher" },
//   { label: "Phụ huynh", href: "/parent" },
//   { label: "Quản trị", href: "/admin-analytics" },
// ];

interface RoleNavLink {
  label: string;
  href: string;
  role: string;
}

const roleNavLinks: RoleNavLink[] = [
  { label: "🏠 Student Home", href: "/student/home", role: "STUDENT" },
  { label: "🏫 Teacher Home", href: "/teacher/home", role: "TEACHER" },
  { label: "👨‍👩‍👧 Parent Portal", href: "/parent", role: "PARENT" },
  { label: "⚙️ Admin Dashboard", href: "/admin-analytics", role: "ADMIN" },
];

export function TopNavigation() {
  const userLoggedIn = isUserLoggedIn();
  const userSession = getUserSession();
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const currentRole = userSession?.role || "";
  // Filter to show only roles that are different from current role
  const availableRoles = roleNavLinks.filter(link => link.role == currentRole);
  
  return (
    <header className="top-nav">
      <div className="top-nav__inner container-wide">
        <a href="/" className="top-nav__brand">
          <span className="top-nav__logo-mark" />
          BachKhoaViet
        </a>

        <nav className="top-nav__links">
          {/* {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="top-nav__link"
            >
              {item.label}
            </a>
          ))} */}
        </nav>

        <div className="top-nav__actions">
          {userLoggedIn && userSession ? (
            <>
              <div style={{ position: "relative" }}>
                {availableRoles.length > 0 ? (
                  <>
                    <button
                      className="btn btn-muted"
                      onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      {currentRole} ▼
                    </button>
                    {showRoleDropdown && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          right: 0,
                          background: "white",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          minWidth: "200px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                          zIndex: 100,
                          marginTop: "0.5rem",
                        }}
                      >
                        {availableRoles.map((link) => (
                          <a
                            key={link.role}
                            href={link.href}
                            onClick={() => setShowRoleDropdown(false)}
                            style={{
                              display: "block",
                              padding: "0.75rem 1rem",
                              color: "#333",
                              textDecoration: "none",
                              borderBottom: "1px solid #eee",
                              transition: "background-color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.backgroundColor =
                                "#f5f5f5";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLElement).style.backgroundColor =
                                "transparent";
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                        <button
                          onClick={() => {
                            logout();
                            setShowRoleDropdown(false);
                          }}
                          style={{
                            display: "block",
                            width: "100%",
                            padding: "0.75rem 1rem",
                            color: "#333",
                            background: "none",
                            border: "none",
                            borderTop: "1px solid #eee",
                            textAlign: "left",
                            cursor: "pointer",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "#f5f5f5";
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.backgroundColor =
                              "transparent";
                          }}
                        >
                          🚪 Logout
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <span className="btn btn-muted" style={{ cursor: "default" }}>
                    {currentRole}
                  </span>
                )}
              </div>
              <span className="top-nav__user-name">
                {userSession.fullName}
              </span>
              {/* {availableRoles.length === 0 && (
                <button
                  className="btn btn-muted"
                  onClick={() => logout()}
                >
                  Đăng xuất
                </button>
              )} */}
            </>
          ) : (
            <>
              <a href="/signup" className="btn btn-muted">
                Đăng ký
              </a>
              <a href="/login" className="btn btn-primary">
                Đăng nhập
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
