function AdminAnalyticsPage() {
  return (
    <div className="aa-page">
      <aside className="aa-sidebar">
        <div className="aa-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>ADMIN DASHBOARD</small>
          </div>
        </div>

        <nav className="aa-nav">
          <a href="#">Dashboard Overview</a>
          <a href="/content-manager">Content Management</a>
          <a href="/admin-analytics" className="active">
            Student Analytics
          </a>
          <a href="#">Question Bank</a>
          <a href="#">Classroom Management</a>
        </nav>

        <div className="aa-bottom-links">
          <a href="#">Settings</a>
          <a href="#" className="logout">
            Logout
          </a>
        </div>
      </aside>

      <main className="aa-main">
        <header className="aa-topbar">
          <div className="aa-search">
            Search students, classes, or modules...
          </div>
          <div className="aa-top-actions">
            <span>🔔</span>
            <span>❔</span>
            <div className="aa-user">
              <div>
                <strong>Dr. Nguyen Minh</strong>
                <small>Senior Educator</small>
              </div>
              <div className="avatar">🧑</div>
            </div>
          </div>
        </header>

        <section className="aa-content">
          <div className="aa-head-row">
            <div>
              <h1>Student Analytics</h1>
              <p>
                Monitoring performance metrics across 12 active grade modules
              </p>
            </div>
            <div className="aa-head-actions">
              <button className="ghost">⇩ Export Report</button>
              <button className="primary">＋ New Module</button>
            </div>
          </div>

          <section className="aa-stat-grid">
            <article>
              <p>Active Students</p>
              <h3>1,284</h3>
              <small className="good">↗12% from last month</small>
            </article>
            <article>
              <p>Average Score</p>
              <h3>82.5%</h3>
              <small className="bad">↘2% vs school target</small>
            </article>
            <article>
              <p>Pending Grading</p>
              <h3>143</h3>
              <small className="good">↗5% efficiency increased</small>
            </article>
          </section>

          <section className="aa-grid-two">
            <article className="trend-card">
              <div className="trend-head">
                <div>
                  <h2>Progress Trends</h2>
                  <p>Weekly performance per subject category</p>
                </div>
                <button>Last 30 Days</button>
              </div>

              <div className="bar-chart">
                <div style={{ height: "30%" }} />
                <div style={{ height: "48%" }} />
                <div style={{ height: "41%" }} />
                <div style={{ height: "60%" }} />
                <div className="active" style={{ height: "70%" }} />
                <div style={{ height: "52%" }} />
                <div style={{ height: "44%" }} />
                <div style={{ height: "64%" }} />
                <div style={{ height: "34%" }} />
                <div style={{ height: "48%" }} />
              </div>

              <div className="week-labels">
                <span>WEEK 1</span>
                <span>WEEK 2</span>
                <span>WEEK 3</span>
                <span>WEEK 4</span>
                <span>WEEK 5</span>
                <span>WEEK 6</span>
                <span>WEEK 7</span>
                <span>WEEK 8</span>
                <span>WEEK 9</span>
                <span>WEEK 10</span>
              </div>
            </article>

            <aside className="insight-side">
              <article className="insight-box">
                <h2>✦ AI Insights</h2>

                <div className="alert blue">
                  <h4>PERFORMANCE ALERT</h4>
                  <p>Class 10-A shows a 15% drop in Geometry engagement.</p>
                  <a href="#">Review Class Data</a>
                </div>

                <div className="alert green">
                  <h4>MILESTONE REACHED</h4>
                  <p>
                    92 students completed the 'Advanced Calculus' module early.
                  </p>
                </div>

                <h4 className="pending">PENDING REVIEW</h4>
                <div className="review-item">
                  <b>Literature Essay #04</b>
                  <small>Grade 12 • 24 submissions</small>
                </div>
                <div className="review-item">
                  <b>Biology Lab Report</b>
                  <small>Grade 11 • 12 submissions</small>
                </div>
              </article>
            </aside>
          </section>
        </section>
      </main>
    </div>
  );
}

export default AdminAnalyticsPage;
