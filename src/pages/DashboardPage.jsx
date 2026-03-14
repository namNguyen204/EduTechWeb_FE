const statCards = [
  {
    label: "AVG. STUDY DURATION",
    value: "4.2 hrs",
    meta: "↑ 12%",
    barClass: "blue",
  },
  { label: "QUIZ ACCURACY", value: "78.5%", meta: "↓ 2%", barClass: "yellow" },
  {
    label: "CONCEPT MASTERY",
    value: "24/30",
    meta: "Units",
    barClass: "green",
  },
  {
    label: "ENGAGEMENT SCORE",
    value: "Elite",
    meta: "Top 5%",
    barClass: "cyan",
  },
];

const weakTopics = [
  {
    topic: "Newtonian Mechanics - Force Vectors",
    rate: "64% Error Rate",
    width: "64%",
  },
  {
    topic: "Organic Chemistry - Alkanes & Alkenes",
    rate: "52% Error Rate",
    width: "52%",
  },
  {
    topic: "Calculus - Limits & Continuity",
    rate: "41% Error Rate",
    width: "41%",
  },
  {
    topic: "English Literature - Metaphorical Analysis",
    rate: "38% Error Rate",
    width: "38%",
  },
];

function DashboardPage() {
  return (
    <div className="dash-page">
      <aside className="dash-sidebar">
        <div className="dash-logo">
          <span className="logo-mark" />
          <span>BachKhoaViet</span>
        </div>

        <div className="dash-sidebar-title">
          <strong>Student Analytics</strong>
          <span>K-12 Educational Insights</span>
        </div>

        <nav className="dash-nav">
          <a href="#">Overview</a>
          <a href="#" className="active">
            Performance
          </a>
          <a href="#">Behavior</a>
          <a href="#">Predictive AI</a>
          <a href="#">Improvement Plan</a>
        </nav>
      </aside>

      <main className="dash-main">
        <header className="dash-topbar">
          <div className="dash-search">Search students...</div>
          <nav>
            <a href="#">Dashboard</a>
            <a href="#" className="active">
              Students
            </a>
            <a href="#">Curriculum</a>
            <a href="/leaderboard">Leaderboard</a>
            <a href="#">Settings</a>
          </nav>
          <div className="dash-profile">A</div>
        </header>

        <section className="dash-content">
          <div className="dash-breadcrumb">Home / Students / Nguyen Van A</div>
          <h1>Nguyen Van A - Detailed Analytics</h1>
          <p className="dash-meta">
            Grade 10 | Student ID: BK78921 | Status: Active
          </p>

          <div className="dash-actions">
            <button className="btn-small">Export Report</button>
            <button className="btn-small primary">Improvement Path</button>
          </div>

          <div className="dash-tabs">
            <a href="#" className="active">
              Academic Performance
            </a>
            <a href="#">Behavioral Data</a>
            <a href="#">Exam Predictions</a>
            <a href="#">Learning Resources</a>
          </div>

          <section className="dash-stats-grid">
            {statCards.map((card) => (
              <article key={card.label} className="dash-stat-card">
                <p>{card.label}</p>
                <h3>{card.value}</h3>
                <small>{card.meta}</small>
                <div className={`stat-bar ${card.barClass}`} />
              </article>
            ))}
          </section>

          <section className="dash-grid-two">
            <article className="dash-panel heatmap-panel">
              <div className="panel-head">
                <h3>Study Frequency (Weekly Heatmap)</h3>
                <button>Last 30 Days</button>
              </div>

              <div className="heatmap">
                {Array.from({ length: 35 }).map((_, index) => (
                  <span
                    key={index}
                    className={`cell level-${(index * 7) % 5}`}
                  />
                ))}
              </div>

              <p className="panel-note">
                “Peak learning hours observed between 8 PM - 10 PM. Student is
                15% more productive during late-night sessions.”
              </p>
            </article>

            <article className="dash-panel grade-panel">
              <div className="panel-head">
                <h3>Predicted Final Grade</h3>
                <span className="chip">AI PREDICTION</span>
              </div>

              <div className="gauge">
                <div>
                  <strong>9.1</strong>
                  <p>/ 10.0</p>
                </div>
              </div>

              <p className="confidence">Confidence Interval: ± 0.3 pts</p>
              <p className="on-track">On track for "Excellent" Distinction</p>
            </article>
          </section>

          <section className="dash-grid-two second-row">
            <article className="dash-panel weakness-panel">
              <h3>Weakness Analysis: Most Failed Topics</h3>
              <div className="weak-list">
                {weakTopics.map((item) => (
                  <div key={item.topic} className="weak-item">
                    <div className="weak-row">
                      <p>{item.topic}</p>
                      <span>{item.rate}</span>
                    </div>
                    <div className="weak-bar">
                      <div style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="dash-panel improve-panel">
              <h3>Personalized Improvement</h3>
              <p>
                Based on recent performance, the AI has generated a custom path
                to boost predicted score by ±0.5 points.
              </p>
              <ul>
                <li>Review Newton’s 2nd Law (Module 4.2)</li>
                <li>Complete 5 vector practice quizzes</li>
              </ul>
              <button>Launch Path Now</button>
            </article>
          </section>
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;
