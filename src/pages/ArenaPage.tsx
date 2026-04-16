import type { JSX } from "react";

import "../styles/pages/ArenaPage.scss";

const weeklyBattle = [
  { rank: "#1", name: "Hoang Long", xp: "12,450 XP" },
  { rank: "#2", name: "Minh Anh", xp: "11,920 XP" },
  { rank: "#3", name: "Thai Son", xp: "10,880 XP" },
];

const answers = ["x = 8", "x = 10", "x = 12", "x = 15"];

function ArenaPage(): JSX.Element {
  return (
    <div className="lp-page gamification-page">
      <div className="sidebar-overlay"></div>
      <aside className="lp-sidebar">
        <a href="/student/home" className="lp-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>AI Educational Platform</small>
          </div>
        </a>

        <nav className="lp-nav">
          <a href="/student/home">Learning Path</a>
          <a href="/student/course">AI Scanner</a>
          <a href="/student/exams">Mock Exams</a>
          <a href="/student/arena" className="active">
            Gamification
          </a>
          <a href="/student/leaderboard">Analytics</a>
          <a href="/student/messages">Messages</a>
        </nav>

        <a href="/student/profile" className="lp-profile-shortcut">
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
              Search matches, skills, or new challenges...
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active">🎮 Gamification</button>
            <span>🔔</span>
            <a href="/student/profile" className="lp-user">
              <div>
                <strong>Nam Nguyen</strong>
                <small>Grade 12 - Natural Sciences</small>
              </div>
              <div className="avatar">🧑</div>
            </a>
          </div>
        </header>

        <section className="arena-layout">
          <main className="arena-main">
            <section className="round-timer">
              <p>ROUND 4 OF 10</p>
              <div className="timer-box">
                <div>
                  <b>00</b>
                  <small>MIN</small>
                </div>
                <span>:</span>
                <div>
                  <b>42</b>
                  <small>SEC</small>
                </div>
              </div>
            </section>

            <section className="duel-panel">
              <article className="player-card left">
                <div className="player-head">
                  <div className="avatar">👨‍🎓</div>
                  <div>
                    <h3>You (Lv. 15)</h3>
                    <p>Rank: #1,240</p>
                  </div>
                </div>
                <div className="acc-row">
                  <span>CURRENT ACCURACY</span>
                  <strong>92%</strong>
                </div>
                <div className="bar">
                  <div style={{ width: "92%" }} />
                </div>
                <small>Avg. Speed: 1.2s/q</small>
                <div className="tags">
                  <span>STREAK X5</span>
                  <span>PERFECT BONUS</span>
                </div>
              </article>

              <div className="vs-badge">VS</div>

              <article className="player-card right">
                <div className="player-head reverse">
                  <div>
                    <h3>Quang Minh (Lv. 18)</h3>
                    <p>Rank: #890</p>
                  </div>
                  <div className="avatar">🧑</div>
                </div>
                <div className="acc-row">
                  <span>CURRENT ACCURACY</span>
                  <strong>88%</strong>
                </div>
                <div className="bar danger">
                  <div style={{ width: "88%" }} />
                </div>
                <small>Avg. Speed: 1.5s/q</small>
                <div className="tags right">
                  <span>SHIELD ACTIVE</span>
                </div>
              </article>
            </section>

            <section className="question-panel">
              <div className="question-head">
                <span>Algebra</span>
                <span>Hard</span>
              </div>

              <p className="question-no">QUESTION 4</p>
              <h2>Solve for x:</h2>
              <h1>3(x - 5) + 2x = 25</h1>

              <div className="answers-grid">
                {answers.map((ans) => (
                  <button
                    key={ans}
                    className={ans === "x = 10" ? "active" : ""}
                  >
                    {ans}
                  </button>
                ))}
              </div>
            </section>

            <section className="arena-bottom-tools">
              <div className="skill-buttons">
                <button>💡 HINT</button>
                <button>⚡ 2X PTS</button>
                <button>❄ FREEZE</button>
              </div>
              <div className="emoji-bar">🔥 😎 💯 🤔 👏</div>
            </section>
          </main>

          <aside className="arena-sidebar">
            <article className="battle-card">
              <h3>🏆 Weekly Battle</h3>
              <p>Season 12: Galactic Warriors</p>

              <div className="battle-list">
                {weeklyBattle.map((item) => (
                  <div key={item.rank} className="battle-item">
                    <strong>{item.rank}</strong>
                    <div>
                      <b>{item.name}</b>
                      <small>{item.xp}</small>
                    </div>
                  </div>
                ))}

                <div className="battle-item you">
                  <strong>#12</strong>
                  <div>
                    <b>You</b>
                    <small>8,450 XP</small>
                  </div>
                </div>
              </div>

              <button className="full-rank">Full Rankings</button>
            </article>

            <article className="catchup-card">
              <h4>Quang Minh is catching up!</h4>
              <p>He just answered Question 4 correctly.</p>
              <button>JOIN WAITLIST</button>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default ArenaPage;
