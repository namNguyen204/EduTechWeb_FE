import type { JSX } from "react";

import "../styles/pages/TeacherOnboardingPage.scss";

function TeacherOnboardingPage(): JSX.Element {
  return (
    <div className="onboard-page">
      <header className="onboard-topbar">
        <div className="onboard-logo">
          <span className="logo-mark" />
          <strong>BachKhoaViet</strong>
        </div>

        <div className="onboard-auth">
          <span>👨‍🏫 Teacher Setup</span>
          <a href="/login">Change Role</a>
        </div>
      </header>

      <main className="onboard-main">
        <section className="onboard-progress">
          <div className="progress-head">
            <b>STEP 1/3</b>
            <span>33% Complete</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
          <p>Start your personalized learning journey</p>
        </section>

        <section className="onboard-intro">
          <h1>Welcome to BachKhoaViet!</h1>
          <p>
            Tell us more about you so we can personalize the most effective
            learning path.
          </p>
        </section>

        <section className="onboard-block">
          <h2>Which grade are you currently in?</h2>
          <div className="level-grid">
            <article className="level-card">
              <div className="level-icon">☻</div>
              <h3>Primary</h3>
              <p>Primary School (Grades 1 - 5)</p>
            </article>

            <article className="level-card active">
              <div className="level-icon">🎓</div>
              <h3>Middle</h3>
              <p>Middle School (Grades 6 - 9)</p>
              <span className="check">✓</span>
            </article>

            <article className="level-card">
              <div className="level-icon">📖</div>
              <h3>High</h3>
              <p>High School (Grades 10 - 12)</p>
            </article>
          </div>
        </section>

        <section className="onboard-block">
          <h2>What is your learning goal?</h2>
          <div className="goal-grid">
            <article className="goal-card">
              <div className="goal-dot orange">◔</div>
              <h3>Build Strong Foundations</h3>
              <p>Strengthen core knowledge and fill critical learning gaps.</p>
            </article>

            <article className="goal-card">
              <div className="goal-dot purple">♜</div>
              <h3>Advanced Mastery</h3>
              <p>
                Aim for top scores and excel in gifted student competitions.
              </p>
            </article>

            <article className="goal-card">
              <div className="goal-dot blue">≡</div>
              <h3>Exam Preparation</h3>
              <p>Practice intensive mock exams for upcoming important tests.</p>
            </article>
          </div>
        </section>

        <section className="onboard-actions">
          <a href="/" className="back-link">
            ← Back
          </a>
          <a href="/teacher/course" className="next-btn">
            Continue →
          </a>
        </section>
      </main>

      <div className="onboard-stars">
        <span className="star big">✦</span>
        <span className="star">✦</span>
        <span className="star small">✦</span>
      </div>
    </div>
  );
}

export default TeacherOnboardingPage;
