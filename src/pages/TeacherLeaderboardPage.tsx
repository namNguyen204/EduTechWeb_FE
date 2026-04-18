import type { JSX } from "react";

import "../styles/pages/TeacherLeaderboardPage.scss";

const ranks = [
  {
    rank: "#4",
    name: "Hoang Thu Thuy",
    school: "High School for Gifted Students",
    score: "95/100",
    time: "41:20",
    trend: "+2",
    you: false,
  },
  {
    rank: "#5",
    name: "Pham Minh Quan",
    school: "Amsterdamm Specialized School",
    score: "94/100",
    time: "39:45",
    trend: "-1",
    you: false,
  },
  {
    rank: "#42",
    name: "You (Alex Johnson)",
    school: "Class 12A1",
    score: "92/100",
    time: "45:12",
    trend: "+15",
    you: true,
  },
  {
    rank: "#43",
    name: "Bui Tuyet Nhi",
    school: "Le Quy Don High School",
    score: "92/100",
    time: "48:22",
    trend: "—",
    you: false,
  },
];

function TeacherLeaderboardPage(): JSX.Element {
  return (
    <div className="lp-page analytics-page">
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
          <a href="/teacher/subjects">Assignment Manager</a>
          <a href="/teacher/exams">Quizzes & Tests</a>
          <a href="/teacher/arena">Class Performance</a>
          <a href="/teacher/leaderboard" className="active">
            Analytics
          </a>
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
              Search students, classes, or ranking statistics...
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active">📊 Analytics</button>
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

        <section className="lb-main">
          <p className="lb-kicker">🏆 OFFICIAL RESULTS</p>
          <h1>Math Mock Exam #4</h1>
          <p className="lb-meta">
            12,450 Participants • Average Score: 78.5% • Avg. Time: 42:15
          </p>

          <div className="lb-head-actions">
            <button className="lb-btn ghost">Export Results</button>
            <button className="lb-btn primary">Review My Exam</button>
          </div>

          <section className="lb-podium-wrap">
            <div className="lb-podium second">
              <div className="medal">2ND</div>
              <div className="score">98/100</div>
              <h3>Tran Thi Bich</h3>
              <p>Time: 38:12</p>
            </div>

            <div className="lb-podium first">
              <div className="medal">1ST PLACE</div>
              <div className="score">100/100</div>
              <h3>Nguyen Van An</h3>
              <p>Time: 34:05</p>
            </div>

            <div className="lb-podium third">
              <div className="medal">3RD</div>
              <div className="score">96/100</div>
              <h3>Le Van Cuong</h3>
              <p>Time: 40:55</p>
            </div>
          </section>

          <section className="lb-standing">
            <div>
              <span>YOUR PERSONAL STANDING</span>
              <h2>Rank #42 • Score: 92/100</h2>
            </div>
            <div>
              <span>PERCENTILE</span>
              <h2>Top 5%</h2>
            </div>
            <button>View Analytics</button>
          </section>

          <section className="lb-table-card">
            <div className="lb-table-tabs">
              <a href="#" className="active">
                National
              </a>
              <a href="#">Grade</a>
              <a href="#">Class</a>
            </div>

            <table className="lb-table">
              <thead>
                <tr>
                  <th>RANK</th>
                  <th>STUDENT</th>
                  <th>SCORE</th>
                  <th>TIME</th>
                  <th>TREND</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map((row) => (
                  <tr key={row.rank} className={row.you ? "you" : ""}>
                    <td>{row.rank}</td>
                    <td>
                      <strong>{row.name}</strong>
                      <small>{row.school}</small>
                    </td>
                    <td>{row.score}</td>
                    <td>{row.time}</td>
                    <td>
                      <span
                        className={`trend ${row.trend.startsWith("-") ? "down" : "up"}`}
                      >
                        {row.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="lb-table-foot">
              <p>Showing 1-10 of 12,450 test-takers</p>
              <div className="pagination">
                <button>‹</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>›</button>
              </div>
            </div>
          </section>

          <section className="lb-cta">
            <div>
              <h3>Ready to beat your score?</h3>
              <p>
                Challenge yourself with another mock exam and climb the
                leaderboard. Your progress is tracked by our AI to help you
                improve faster.
              </p>
            </div>
            <div className="lb-cta-actions">
              <button className="lb-btn ghost">Explore Topics</button>
              <button className="lb-btn primary">Start Next Exam</button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default TeacherLeaderboardPage;
