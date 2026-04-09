function TeacherLearningPathPage() {
  return (
    <div className="lp-page">
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
          <a href="/teacher/home" className="active">
            My Classes
          </a>
          <a href="/teacher/course">Assignment Manager</a>
          <a href="/teacher/exams">Quizzes & Tests</a>
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
              onClick={() => window.toggleSidebar()}
            >
              ☰
            </button>
          </div>
          <div className="lp-topbar-center">
            <div className="lp-search">Search lessons, formulas...</div>
          </div>
          <div className="lp-actions">
            <a href="/teacher/course" className="scanner">
              🧠 AI Scanner
            </a>
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

        <section className="lp-body">
          <div className="lp-content-left">
            <div className="lp-heading">
              <h1>Teacher Dashboard 👨‍🏫</h1>
              <p>
                Manage your classes, track student progress, and create engaging
                lessons with AI assistance.
              </p>
              <div className="lp-quick-actions">
                <a href="/teacher/course">+ Create Assignment</a>
                <button className="ghost">👥 3 Active Classes</button>
              </div>
            </div>

            <article className="lp-map-card">
              <div className="card-head">
                <div>
                  <h3>Class Performance Overview</h3>
                  <p>Real-time insights powered by AI analytics</p>
                </div>
                <div className="icons">
                  <span>📊</span>
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
                  <h4>Grade 12 Mathematics - Module Completion</h4>
                  <p>28 students completed: Algebra Fundamentals</p>
                </div>
              </div>
            </article>

            <section className="lp-stats-row">
              <article>
                <span>�</span>
                <div>
                  <small>TOTAL STUDENTS</small>
                  <h4>87 Students</h4>
                </div>
              </article>
              <article>
                <span>📚</span>
                <div>
                  <small>AVERAGE SCORE</small>
                  <h4>78.5%</h4>
                </div>
              </article>
              <article>
                <span>📋</span>
                <div>
                  <small>PENDING ASSIGNMENTS</small>
                  <h4>12</h4>
                </div>
              </article>
              <article>
                <span>⏱</span>
                <div>
                  <small>LESSON TIME SAVED</small>
                  <h4>46 Hours</h4>
                </div>
              </article>
            </section>
          </div>

          <aside className="lp-content-right">
            <article className="overview-card">
              <div className="overview-head">
                <h3>Class Completion Rate</h3>
                <strong>75%</strong>
              </div>
              <div className="progress">
                <div />
              </div>
              <p>75 out of 87 students completed today's assignments</p>
            </article>

            <article className="tasks-card">
              <div className="tasks-head">
                <h3>Pending Tasks</h3>
                <span>5/8 Done</span>
              </div>
              <ul>
                <li className="done">Grade Chapter 3 quizzes</li>
                <li className="done">Record lesson video</li>
                <li className="done">Send feedback to slow learners</li>
                <li>Review student submissions</li>
                <li>Prepare next week materials</li>
              </ul>
              <button>+ New task</button>
            </article>

            <article className="tutor-online-card">
              <h3>🤖 AI Class Assistant</h3>
              <p>Get AI-powered help creating lessons and grading</p>
              <div className="suggestion">
                "Create a quiz on quadratic equations"
              </div>
              <div className="suggestion">
                "Suggest group activities for Chapter 4"
              </div>
              <div className="chat-mini">
                <input placeholder="Ask AI for help..." />
                <button>➤</button>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default TeacherLearningPathPage;
