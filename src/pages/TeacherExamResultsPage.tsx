import type { JSX } from "react";

import "../styles/pages/TeacherExamResultsPage.scss";

const leaderboardRows = [
  { rank: "1", name: "Nguyen Hang", school: "Le Hong Phong HS", score: "10.0" },
  { rank: "2", name: "Tran Thu Ha", school: "HN-Amsterdam", score: "9.8" },
  { rank: "3", name: "Le Minh Quan", school: "Tran Dai Nghia", score: "9.8" },
];

function TeacherExamResultsPage(): JSX.Element {
  return (
    <div className="lp-page exam-shell-page">
      <div className="sidebar-overlay"></div>
      <aside className="lp-sidebar">
        <a href="/teacher/home" className="lp-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>AI Educational Platform</small>
          </div>
        </a>

        <nav className="lp-nav">
          <a href="/teacher/home">My Classes</a>
          <a href="/teacher/course">Assignment Manager</a>
          <a href="/teacher/exams" className="active">
            Quizzes & Tests
          </a>
          <a href="/teacher/arena">Class Performance</a>
          <a href="/teacher/leaderboard">Analytics Dashboard</a>
          <a href="/teacher/messages">Student Messages</a>
        </nav>

        <a href="/teacher/profile" className="lp-profile-shortcut">
          ⚙ Profile & Settings
        </a>

        <article className="lp-upgrade">
          <p>PRO MEMBER</p>
          <h4>Get unlimited AI scans and detailed solutions.</h4>
          <button>Upgrade Now</button>
        </article>
      </aside>

      <main className="lp-main">
        <header className="lp-topbar">
          <div className="lp-topbar-left">
            <button
              className="sidebar-toggle"
              onClick={() => window.toggleSidebar?.()}
            >
              ☰
            </button>
          </div>
          <div className="lp-topbar-center">
            <div className="lp-search">
              Search mock exams, subjects, or recent results...
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active">📝 Mock Exams</button>
            <span>🔔</span>
            <a href="/teacher/profile" className="lp-user">
              <div>
                <strong>Nam Nguyen</strong>
                <small>Grade 12 - Natural Sciences</small>
              </div>
              <div className="avatar">🧑</div>
            </a>
          </div>
        </header>

        <section className="exam-main">
          <section className="exam-grid">
            <div className="exam-left">
              <article className="exam-hero">
                <p>MATHEMATICS GRADE 12</p>
                <h1>Mock Exam: Calculus & Trigonometry</h1>
                <small>Completed on Oct 24, 2023 - 50 Questions</small>

                <div className="hero-actions">
                  <button className="ghost">⬇ Download Report</button>
                  <button className="primary">Retake Exam</button>
                </div>
              </article>

              <section className="exam-stats">
                <article>
                  <p>Final Score</p>
                  <h3>8.5 / 10</h3>
                  <small className="good">↗ +1.2% from last mock</small>
                </article>
                <article>
                  <p>Time Taken</p>
                  <h3>42:15</h3>
                  <small className="warn">• -5:00 vs avg</small>
                </article>
                <article>
                  <p>Class Percentile</p>
                  <h3>Top 3%</h3>
                  <small className="good">★ Rank #12 of 450</small>
                </article>
              </section>

              <section className="review-card">
                <h2>Review Wrong Answers (3)</h2>

                <div className="question-card">
                  <div className="question-head">
                    <span>Question 14 - Trigonometry</span>
                    <small>Time spent: 1:45</small>
                  </div>

                  <p className="prompt">
                    Simplify the expression: sin²x / (1 - cos x)
                  </p>

                  <div className="answer-row wrong">
                    ✖ Your Answer: sin x + cos x
                  </div>
                  <div className="answer-row right">
                    ✔ Correct Answer: 1 + cos x
                  </div>

                  <div className="ai-note">
                    <h4>💡 AI Feedback</h4>
                    <p>
                      You likely forgot the Pythagorean identity: sin²x = 1 -
                      cos²x. Substituting this gives (1 - cos²x) / (1 - cos x).
                      Since 1 - cos²x is a difference of squares, it becomes (1
                      - cos x)(1 + cos x).
                    </p>
                  </div>
                </div>

                <div className="question-min">
                  Question 27 &nbsp;&nbsp; Calculate the derivative of f(x) =
                  ln(x² + 1)
                </div>
              </section>

              <section className="recommend-card">
                <h2>Personalized Recommendations</h2>
                <div className="recommend-grid">
                  <article>
                    <div className="icon">📘</div>
                    <div>
                      <h4>Mastering Trigonometric Identities</h4>
                      <small>Video Lesson • 15 mins</small>
                      <a href="#">Start Lesson →</a>
                    </div>
                  </article>
                  <article>
                    <div className="icon">🧪</div>
                    <div>
                      <h4>Calculus Booster: Practice Quiz</h4>
                      <small>Practice Set • 10 questions</small>
                      <a href="#">Practice Now →</a>
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <aside className="exam-right">
              <article className="side-leaderboard">
                <div className="side-head">
                  <h3>🏆 Top 5 Leaderboard</h3>
                  <a href="#">See All</a>
                </div>
                <p>Exam: Advanced Calculus</p>

                {leaderboardRows.map((row) => (
                  <div className="leader-row" key={row.rank}>
                    <span className="rank">{row.rank}</span>
                    <div>
                      <b>{row.name}</b>
                      <small>{row.school}</small>
                    </div>
                    <strong>{row.score}</strong>
                  </div>
                ))}

                <div className="my-row">
                  <span>12</span>
                  <div>
                    <b>Minh Anh (You)</b>
                    <small>Pham Soi Chuc</small>
                  </div>
                  <strong>8.5</strong>
                </div>

                <p className="hint">
                  You need 0.6 points more to reach Top 10!
                </p>
                <button>Challenge a Peer</button>
              </article>

              <article className="side-tutor">
                <h3>AI Tutor is Ready</h3>
                <p>
                  I've analyzed your mistakes. Let's work on your Trigonometry
                  weak points together.
                </p>
                <button>Open Chat Mentor</button>
              </article>
            </aside>
          </section>
        </section>
      </main>
    </div>
  );
}

export default TeacherExamResultsPage;
