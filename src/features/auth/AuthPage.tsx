import "../../styles/pages/AuthPage.scss";

export function AuthPage() {
  return (
    <main className="auth-page container-page">
      <section className="auth-page__left">
        <div className="auth-page__brand">
          <span className="auth-page__logo-mark" />
          BachKhoaViet
        </div>

        <h1>Welcome back, Scholar!</h1>
        <p>
          Truy cập dashboard học tập cá nhân hóa bằng AI. Giao diện auth được tách SCSS riêng để
          dễ tùy chỉnh theo nhu cầu sản phẩm.
        </p>

        <div className="auth-page__left-card">
          <p>Trusted by 50,000+ students</p>
          <p>Học sinh, giáo viên và phụ huynh đang dùng mỗi ngày.</p>
        </div>
      </section>

      <section className="auth-page__right">
        <h2>Sign in / Sign up</h2>
        <p>Đăng nhập để vào đúng workspace theo vai trò.</p>

        <div className="auth-page__tabs">
          <button type="button" className="active">
            Login
          </button>
          <button type="button">
            Sign Up
          </button>
        </div>

        <form className="auth-page__form">
          <label>
            Email Address
            <input
              type="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="••••••••"
            />
          </label>

          <button type="button" className="btn btn-primary auth-page__submit">
            Đăng nhập →
          </button>
        </form>
      </section>
    </main>
  );
}
