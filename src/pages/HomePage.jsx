const stats = [
  { label: "Active students", value: "50k+" },
  { label: "Completed lessons", value: "1.2M+" },
  { label: "AI questions answered", value: "5M+" },
];

const features = [
  {
    title: "Instant scan and solutions",
    desc: "Simply capture a photo of your textbook exercise and AI will analyze it with clear step-by-step explanations, helping students truly understand concepts instead of memorizing answers.",
    badge: "Smart AI Scanner",
  },
  {
    title: "Multi-modal learning",
    desc: "AI-enhanced video lessons generate quick in-video quizzes and key concept summaries, adapting learning pace to each student's absorption level.",
    badge: "AI Interactive Video",
  },
];

function HomePage() {
  return (
    <div className="page">
      <header className="navbar container">
        <div className="logo">
          <span className="logo-mark" />
          <span>BachKhoaViet</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-muted" href="/login">
            Login
          </a>
          <a className="btn btn-primary" href="/auth?tab=signup">
            Sign Up
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-left">
            <p className="pill">⚡ NEXT-GEN LEARNING PLATFORM</p>
            <h1>
              BachKhoaViet - <span>Igniting Knowledge</span>
            </h1>
            <p className="subtitle">
              Delivering personalized AI learning assistants and advanced
              interactive tools for K-12 students.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline">Explore Courses</button>
            </div>

            <div className="users-row">
              <div className="avatars">
                <span />
                <span />
                <span />
              </div>
              <p>Trusted by 50,000+ students</p>
            </div>
          </div>

          <div className="hero-right">
            <div className="badge-top">✅ AI Scanner Active</div>
            <div className="mock-card" />
            <div className="badge-bottom">
              <small>NEXT LESSON</small>
              <b>Grade 12 Math - Integration</b>
            </div>
          </div>
        </section>

        <section className="stats container">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <div className="dot" />
              <p>{item.label}</p>
              <h3>{item.value}</h3>
            </article>
          ))}
        </section>

        <section className="features container">
          <h2>Transforming K-12 Learning</h2>
          <p className="features-sub">
            Our AI-powered tools make learning more engaging, personalized, and
            effective for every student.
          </p>

          <div className="feature-grid">
            {features.map((item, index) => (
              <article key={item.title} className="feature-card">
                <div
                  className={`feature-image ${index === 0 ? "img-one" : "img-two"}`}
                >
                  <span>{item.badge}</span>
                  {index === 1 && <div className="play-btn">▶</div>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta container">
          <h2>Ready to accelerate your learning with AI?</h2>
          <p>
            Join thousands of students who are transforming the way they learn
            every day. Create your free account today.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-light">Sign Up Now - Free</button>
            <button className="btn btn-ghost">Contact Support</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo footer-logo">
              <span className="logo-mark" />
              <span>BachKhoaViet</span>
            </div>
            <p>
              A leading digital education platform in Vietnam, applying AI to
              teaching and learning for the next generation.
            </p>
          </div>

          <div>
            <h4>Products</h4>
            <a href="#">AI Scanner</a>
            <a href="#">Online Classes</a>
            <a href="#">Exam Bank</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Knowledge Blog</a>
          </div>

          <div>
            <h4>Connect</h4>
            <div className="socials">
              <span>⌁</span>
              <span>✉</span>
              <span>◔</span>
            </div>
          </div>
        </div>

        <p className="copyright">
          © 2024 BachKhoaViet Education Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
