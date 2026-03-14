function LearningPathPage() {
  return (
    <div className="lp-page">
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
          <a href="/student/home" className="active">
            Learning Path
          </a>
          <a href="/student/course">AI Scanner</a>
          <a href="/student/exams">Mock Exams</a>
          <a href="/student/arena">Gamification</a>
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
              onClick={() => window.toggleSidebar()}
            >
              ☰
            </button>
          </div>
          <div className="lp-topbar-center">
            <div className="lp-search">Search lessons, formulas...</div>
          </div>
          <div className="lp-actions">
            <a href="/student/course" className="scanner">
              🧠 AI Scanner
            </a>
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

        <section className="lp-body">
          <div className="lp-content-left">
            <div className="lp-heading">
              <h1>Good morning, Nam! 👋</h1>
              <p>Today, we will continue your Grade 12 calculus path.</p>
              <div className="lp-quick-actions">
                <a href="/student/course">▶ Continue previous lesson</a>
                <button className="ghost">Level: Grade 12</button>
              </div>
            </div>

            <article className="lp-map-card">
              <div className="card-head">
                <div>
                  <h3>Knowledge Map</h3>
                  <p>Systematic AI-powered knowledge mapping</p>
                </div>
                <div className="icons">
                  <span>🔍</span>
                  <span>⚑</span>
                </div>
              </div>

              <div className="map-area">
                <div className="node done one">✓</div>
                <div className="node done two">✓</div>
                <div className="node current">📘</div>
                <div className="node lock one">🔒</div>
                <div className="node lock two">🔒</div>

                <div className="map-caption">
                  <h4>Derivatives - Integrals</h4>
                  <p>Currently learning: Lesson 3.2</p>
                </div>
              </div>
            </article>

            <section className="lp-stats-row">
              <article>
                <span>🔥</span>
                <div>
                  <small>LEARNING STREAK</small>
                  <h4>12 Days</h4>
                </div>
              </article>
              <article>
                <span>✪</span>
                <div>
                  <small>EXPERIENCE POINTS</small>
                  <h4>2,450 XP</h4>
                </div>
              </article>
              <article>
                <span>♜</span>
                <div>
                  <small>CLASS RANK</small>
                  <h4>Top 5</h4>
                </div>
              </article>
              <article>
                <span>☑</span>
                <div>
                  <small>COMPLETED</small>
                  <h4>42 Lessons</h4>
                </div>
              </article>
            </section>
          </div>

          <aside className="lp-content-right">
            <article className="overview-card">
              <div className="overview-head">
                <h3>Overall progress</h3>
                <strong>75%</strong>
              </div>
              <div className="progress">
                <div />
              </div>
              <p>You have completed 18/24 Grade 12 Math modules</p>
            </article>

            <article className="tasks-card">
              <div className="tasks-head">
                <h3>Today's goals</h3>
                <span>3/5 Tasks</span>
              </div>
              <ul>
                <li className="done">Watch lesson video 3.1</li>
                <li className="done">Complete Chapter 2 quiz</li>
                <li>Practice integration 3.2</li>
                <li>Review logarithm formulas</li>
              </ul>
              <button>+ Add goal</button>
            </article>

            <article className="tutor-online-card">
              <h3>💬 AI Tutor Online</h3>
              <p>Struggling with a problem? Ask me right away!</p>
              <div className="suggestion">"Solve log(x) + log(x-1) = 1"</div>
              <div className="suggestion">"Find the integral of sin²(2x)"</div>
              <div className="chat-mini">
                <input placeholder="Ask AI anything..." />
                <button>➤</button>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default LearningPathPage;
