function MessagesPage() {
  return (
    <div className="lp-page messages-shell-page">
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
          <a href="/student/arena">Gamification</a>
          <a href="/student/leaderboard">Analytics</a>
          <a href="/student/messages" className="active">
            Messages
          </a>
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
            <div className="lp-search">
              Search teachers, class groups, or messages...
            </div>
          </div>
          <div className="lp-actions">
            <button className="scanner active">💬 Messages</button>
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

        <section className="msg-layout">
          <aside className="msg-left">
            <div className="msg-left-head">
              <h2>Chats</h2>
              <button>✎</button>
            </div>

            <div className="msg-left-search">Search teachers or groups...</div>

            <p className="msg-section-title">CLASS GROUPS</p>
            <article className="chat-item active">
              <div className="avatar">👥</div>
              <div>
                <h4>Grade 10-A Parents</h4>
                <p>Mrs. Lan: Meeting tomorrow at...</p>
              </div>
              <small>12:45</small>
            </article>
            <article className="chat-item">
              <div className="avatar">👥</div>
              <div>
                <h4>Math Science Hub</h4>
                <p>New materials uploaded.</p>
              </div>
              <small>Tue</small>
            </article>

            <p className="msg-section-title">TEACHERS</p>
            <article className="chat-item">
              <div className="avatar">👨‍🏫</div>
              <div>
                <h4>Mr. Nguyen (Math)</h4>
                <p>The progress report is ready.</p>
              </div>
              <small>10:30 AM</small>
            </article>
            <article className="chat-item">
              <div className="avatar">👩‍🏫</div>
              <div>
                <h4>Ms. Taylor (English)</h4>
                <p>Minh did excellent in the debate.</p>
              </div>
              <small>Yesterday</small>
            </article>

            <div className="msg-profile-mini">
              <div className="avatar">👨</div>
              <div>
                <strong>Hieu Minh's Dad</strong>
                <small>Parent</small>
              </div>
              <span>⚙</span>
            </div>
          </aside>

          <section className="msg-center">
            <div className="msg-room-head">
              <div>
                <h3>Grade 10-A Parents</h3>
                <p>• 24 Members online</p>
              </div>
              <div className="room-actions">
                <button>📅 Schedule Meeting</button>
                <span>✦</span>
                <span>ℹ</span>
              </div>
            </div>

            <div className="msg-thread">
              <p className="day-label">YESTERDAY</p>

              <div className="bubble-row left">
                <span className="avatar tiny">👨‍🏫</span>
                <div>
                  <p className="sender">
                    Mr. Nguyen <small>10:30 AM</small>
                  </p>
                  <div className="bubble">
                    Hello parents! I've just published the mid-term Math
                    progress reports for all students. You can view them below.
                  </div>

                  <div className="report-card">
                    <div className="report-head">
                      <b>📊 Academic Progress Report</b>
                      <small>PDF • 2.3MB</small>
                    </div>
                    <div className="report-body">
                      <p>
                        STUDENT
                        <br />
                        <strong>Hieu Minh</strong>
                      </p>
                      <p>
                        OVERALL GRADE
                        <br />
                        <strong>A- (88%)</strong>
                      </p>
                    </div>
                    <div className="report-line" />
                    <button>⬇ Download Full Report</button>
                  </div>
                </div>
              </div>

              <p className="day-label">TODAY</p>

              <div className="bubble-row right">
                <div>
                  <p className="sender me">
                    1:25 PM <small>You</small>
                  </p>
                  <div className="bubble me">
                    Thank you Mr. Nguyen! The progress is impressive. I would
                    like to schedule a 5-minute sync regarding the upcoming
                    Algebra competition.
                  </div>
                </div>
                <span className="avatar tiny">👨</span>
              </div>

              <div className="meeting-card">
                <h4>Meeting Request Sent</h4>
                <p>Parent-Teacher Sync: Algebra Comp</p>
                <small>Wait for confirmation</small>
                <div className="meeting-time">
                  <span>
                    DATE
                    <b>Oct 24, 2023</b>
                  </span>
                  <span>
                    TIME
                    <b>4:30 PM</b>
                  </span>
                </div>
              </div>

              <div className="bubble-row left">
                <span className="avatar tiny">👩‍🏫</span>
                <div>
                  <p className="sender">
                    Mrs. Lan <small>12:45 PM</small>
                  </p>
                  <div className="bubble">
                    Mr. Nguyen, is the meeting tomorrow still at 4 PM in the
                    school hall?
                  </div>
                </div>
              </div>
            </div>

            <div className="msg-composer-tools">
              <button>📎 Attach File</button>
              <button>📊 Share Performance</button>
              <button>🎥 Video Call</button>
            </div>

            <div className="msg-composer">
              <input placeholder="Type a message or use AI to summarize..." />
              <span>☺</span>
              <button>➤</button>
            </div>
          </section>

          <aside className="msg-right">
            <div className="student-profile">
              <div className="avatar large">👧</div>
              <h3>Hieu Minh</h3>
              <p>Grade 10-A • ID: #BV9921</p>
            </div>

            <div className="insight-card">
              <h4>AI INSIGHT</h4>
              <p>
                Hieu has shown a 15% improvement in Math logic since last month.
                Focus on "Circular Functions" for the next quiz.
              </p>
            </div>

            <div className="performance-card">
              <h4>RECENT PERFORMANCE</h4>
              <div className="metric">
                <span>Attendance</span>
                <b>98%</b>
              </div>
              <div className="bar">
                <div style={{ width: "98%" }} />
              </div>

              <div className="metric">
                <span>Assignment Rate</span>
                <b>85%</b>
              </div>
              <div className="bar">
                <div style={{ width: "85%" }} />
              </div>
            </div>

            <div className="upcoming-card">
              <h4>UPCOMING</h4>
              <article>
                <b>Lab Report Due</b>
                <small>Tomorrow, 11:59 PM</small>
              </article>
              <article>
                <b>History Quiz</b>
                <small>Friday, Oct 27</small>
              </article>
            </div>

            <button className="view-profile">View Full Profile</button>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default MessagesPage;
