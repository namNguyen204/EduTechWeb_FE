import "../../styles/pages/HomePage.scss";

const roleCards = [
  {
    title: "Student Workspace",
    description: "Lộ trình học tập, bài tập, bảng xếp hạng và kết quả thi.",
    href: "/student",
    cta: "Vào trang học sinh",
  },
  {
    title: "Teacher Workspace",
    description: "Quản lý lớp học, nội dung môn học và phân tích hiệu suất.",
    href: "/teacher",
    cta: "Vào trang giáo viên",
  },
  {
    title: "Parent Portal",
    description: "Giám sát tiến độ học tập và nhận thông báo từ giáo viên.",
    href: "/parent",
    cta: "Vào cổng phụ huynh",
  },
];

export function HomeLandingPage() {
  return (
    <main className="home-page container-page">
      <section className="home-page__hero">
        <div className="home-page__hero-copy">
          <span className="pill">
            ⚡ NEXT-GEN LEARNING PLATFORM
          </span>

          <h1>
            Igniting <span>Knowledge</span>
          </h1>

          <p className="home-page__subtitle">
            Giao diện dùng SCSS tách lớp theo từng page, kế thừa visual language từ file index.css
            trước đây để đồng nhất toàn hệ thống.
          </p>

          <div className="home-page__hero-actions">
            <a href="/signup" className="btn btn-primary">
              Get Started
            </a>
            <a href="/course" className="btn btn-outline">
              Explore Courses
            </a>
          </div>

          <p className="home-page__trusted">Trusted by 50,000+ students</p>
        </div>

        <div className="home-page__hero-visual">
          <div className="badge-top">
            Grade 12 Math - Integration
          </div>
          <div className="mock-card" />
          <div className="badge-bottom">
            AI Scanner thông minh
          </div>
        </div>
      </section>

      <section className="home-page__role-grid">
        {roleCards.map((card) => (
          <article key={card.title} className="home-page__role-card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.href} className="btn btn-dark">
              {card.cta}
            </a>
          </article>
        ))}
      </section>

      <section className="home-page__summary">
        <h2>Transforming K-12 Learning</h2>
        <p>
          Tách style theo page giúp dễ maintain: mỗi màn hình có file SCSS riêng nhưng vẫn dùng
          token/biến chung để giữ trải nghiệm nhất quán.
        </p>
      </section>
    </main>
  );
}
