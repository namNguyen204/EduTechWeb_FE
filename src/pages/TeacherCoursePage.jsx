function TeacherCoursePage() {
  return (
    <div className="lp-page scanner-page">
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
          <a href="/teacher/course" className="active">
            Assignment Manager
          </a>
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
            <div className="lp-search">
              Search assignments, rubrics, or lesson plans...
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active">📝 Create Assignment</button>
            <span>🔔</span>
            <a href="/teacher/profile" className="lp-user">
              <div>
                <strong>Nam Nguyen</strong>
                <small>Mathematics Teacher</small>
              </div>
              <div className="avatar">🧑</div>
            </a>
          </div>
        </header>

        <section className="course-main">
          <div className="course-breadcrumb">
            Assignments &gt; Grade 12 Math &gt; Chapter 3 &gt; Derivatives
          </div>

          <div className="course-grid">
            <section className="course-left">
              <article className="video-card">
                <div className="quiz-overlay">
                  <p className="quiz-tag">📋 ASSIGNMENT</p>
                  <h2>Problem Set: Find Derivatives Using Chain Rule</h2>
                  <p style={{ color: "#999", marginBottom: "15px" }}>
                    Due: March 20, 2026 | 28 students
                  </p>

                  <div className="choices">
                    <label>
                      <input type="radio" name="status" defaultChecked />
                      <span>✅ 15 submitted</span>
                    </label>
                    <label>
                      <input type="radio" name="status" />
                      <span>👀 8 in progress</span>
                    </label>
                    <label>
                      <input type="radio" name="status" />
                      <span>❌ 5 not started</span>
                    </label>
                  </div>

                  <button className="submit-answer">View Submissions ➤</button>
                </div>

                <div className="video-controls">
                  <span>▶</span>
                  <span>🔊</span>
                  <small>05:00 | 12:23</small>
                  <div className="progress-line" />
                  <span>⚙</span>
                  <span>⤢</span>
                </div>
              </article>

              <article className="tutor-card">
                <div className="tutor-head">
                  <div>
                    <h3>AI Tutor Support</h3>
                    <p>● Online & Ready to help</p>
                  </div>
                  <a href="#">Full Chat History</a>
                </div>

                <div className="msg-row">
                  <span className="bot">🤖</span>
                  <p>
                    Hi there! I noticed you're currently answering a question
                    about triangle properties. Need a quick hint about the
                    interior angles theorem?
                  </p>
                </div>

                <div className="msg-row me">
                  <p>
                    Yes please, can you summarize why it's always 180 degrees?
                  </p>
                  <span className="bot">👤</span>
                </div>

                <div className="quick-tags">
                  <button>Summarize this section</button>
                  <button>Give me an example</button>
                  <button>I don't understand the theorem</button>
                </div>

                <div className="chat-input">
                  <input placeholder="Ask your AI tutor a question..." />
                  <button>➤</button>
                </div>
              </article>
            </section>

            <aside className="course-right">
              <article className="side-card">
                <div className="side-head">
                  <h4>Course Progress</h4>
                  <strong>45%</strong>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" />
                </div>
                <small>🏁 Next quiz milestone at 07:15</small>
              </article>

              <article className="side-card">
                <h4>Lesson Content</h4>
                <div className="lesson-item active">
                  <div>
                    <b>1.1 Introduction to Shapes</b>
                    <small>Current Lecture • 12:23</small>
                  </div>
                  <span>📶</span>
                </div>
                <div className="lesson-item">
                  <div>
                    <b>1.2 Understanding Triangles</b>
                    <small>Video • 15:45</small>
                  </div>
                  <span>🔒</span>
                </div>
                <div className="lesson-item">
                  <div>
                    <b>1.3 Chapter Quiz</b>
                    <small>Quiz • 10 Questions</small>
                  </div>
                  <span>🔒</span>
                </div>
              </article>

              <article className="side-card">
                <h4>Study Resources</h4>
                <a href="#" className="resource-item">
                  <span>🧾 Geometry Cheat Sheet</span>
                  <b>⇩</b>
                </a>
                <a href="#" className="resource-item">
                  <span>🗂 Flashcards: Shapes</span>
                  <b>➜</b>
                </a>
              </article>

              <article className="premium-card">
                <p>PREMIUM PERK</p>
                <h4>Practice with AI Coach</h4>
                <small>
                  Get personalized feedback on your geometry drawings in
                  real-time.
                </small>
                <button>Upgrade Now</button>
              </article>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TeacherCoursePage;
