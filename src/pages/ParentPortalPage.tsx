import type { JSX } from "react";

import "../styles/pages/ParentPortalPage.scss";

const activity = [
  {
    time: "1 HOUR AGO",
    title: "Completed: Algebra Quiz 2",
    note: "Score: 9.0/10.0",
    tone: "blue",
  },
  {
    time: "3 HOURS AGO",
    title: "Mission Progress: Geometry",
    note: "3/5 lessons viewed",
    tone: "green",
  },
  {
    time: "YESTERDAY",
    title: "New Mission Started",
    note: "English: Creative Writing",
    tone: "orange",
  },
];

function ParentPortalPage(): JSX.Element {
  return (
    <div className="parent-page">
      <aside className="parent-sidebar">
        <div className="parent-brand">
          <span className="logo-mark" />
          <div>
            <strong>Parent Portal</strong>
            <small>BachKhoaViet AI EdTech</small>
          </div>
        </div>

        <nav className="parent-nav">
          <a href="#" className="active">
            Dashboard
          </a>
          <a href="#">Detailed Reports</a>
          <a href="#">Course Map</a>
          <a href="#">Missions</a>
          <a href="#">Rewards</a>
          <a href="#">Settings</a>
        </nav>

        <div className="parent-child-card">
          <div className="avatar">👦</div>
          <div>
            <strong>Minh Hoang</strong>
            <small>Grade 8 - STEM</small>
          </div>
        </div>
        <button className="switch-child">↔ Switch Child</button>
      </aside>

      <main className="parent-main">
        <header className="parent-topbar">
          <div className="parent-search">Search activities...</div>

          <div className="parent-top-actions">
            <span>🔔</span>
            <span>❔</span>
            <div className="parent-user">
              <div>
                <strong>Mr. Nguyen</strong>
                <small>Premium Parent</small>
              </div>
              <div className="avatar small">🧑</div>
            </div>
          </div>
        </header>

        <section className="parent-content">
          <div className="parent-title-row">
            <div>
              <h1>Student Monitoring</h1>
              <p>Real-time progress and mission tracking for Minh Hoang.</p>
            </div>
            <button className="live-pill">• Live Session Active</button>
          </div>

          <section className="parent-stats">
            <article className="parent-stat-card">
              <div className="head">
                <span>🕒</span>
                <small>↗ +12%</small>
              </div>
              <p>LEARNING TIME</p>
              <h3>
                2h 15m <small>/ day</small>
              </h3>
            </article>
            <article className="parent-stat-card">
              <div className="head">
                <span>☑</span>
                <small>80% target</small>
              </div>
              <p>MISSIONS COMPLETED</p>
              <h3>
                4 / 5 <small>tasks</small>
              </h3>
            </article>
            <article className="parent-stat-card">
              <div className="head">
                <span>⭐</span>
                <small>↗ +5%</small>
              </div>
              <p>AVG. EXAM SCORE</p>
              <h3>
                8.5 <small>/ 10.0</small>
              </h3>
            </article>
          </section>

          <section className="zalo-card">
            <div className="zalo-logo">Zalo</div>
            <div>
              <h3>Stay Connected via Zalo</h3>
              <p>
                Get real-time notifications about progress and exam results
                directly on your phone.
              </p>
            </div>
            <button>Connect to Zalo</button>
          </section>

          <section className="parent-grid-two">
            <article className="incentive-card">
              <div className="section-head">
                <h2>Incentive & Rewards</h2>
                <a href="#">+ Add Incentive</a>
              </div>

              <div className="active-goal">
                <div className="goal-top">
                  <div>
                    <p>ACTIVE GOAL</p>
                    <h4>Weekend Movie Night</h4>
                    <small>
                      Condition: Complete all 5 Math missions this week.
                    </small>
                  </div>
                  <strong>
                    80% <small>PROGRESS</small>
                  </strong>
                </div>
                <div className="goal-bar">
                  <div />
                </div>
              </div>

              <div className="empty-goal">
                <span>🏆</span>
                <h4>No other active incentives</h4>
                <p>Set a new goal to keep Minh motivated!</p>
              </div>
            </article>

            <article className="activity-card">
              <h2>Recent Activity</h2>
              <div className="timeline">
                {activity.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <span className={`dot ${item.tone}`} />
                    <div>
                      <small>{item.time}</small>
                      <h4>{item.title}</h4>
                      <p>{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="recent-exam">
            <h2>Recent Exam Scores</h2>
            <a href="#">View All Exams</a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default ParentPortalPage;
