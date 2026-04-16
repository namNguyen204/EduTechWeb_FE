import type { JSX } from "react";
import React from "react";
import { subjectsService } from "../services";
import type { Subject } from "../types/response";
import "../styles/pages/TeacherCoursePage.scss";

interface SubjectDetailPageProps {
  subjectId?: string;
}

function SubjectDetailPage({ subjectId }: SubjectDetailPageProps): JSX.Element {
  const [subject, setSubject] = React.useState<Subject | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Get subject ID from URL or props
  const id = React.useMemo(() => {
    if (subjectId) return subjectId;
    const params = new URLSearchParams(window.location.search);
    return params.get("id") || "";
  }, [subjectId]);

  React.useEffect(() => {
    if (!id) return;

    const fetchSubject = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await subjectsService.getById(id);
        setSubject(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch subject";
        setError(errorMessage);
        console.error("Fetch subject error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubject();
  }, [id]);

  if (!id) {
    return (
      <div className="subject-detail-page">
        <div className="error-container">
          <p>❌ No subject ID provided</p>
          <a href="/teacher/course">Back to Subjects</a>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="subject-detail-page">
        <div className="loading-container">
          <p>Loading subject details...</p>
        </div>
      </div>
    );
  }

  if (error || !subject) {
    return (
      <div className="subject-detail-page">
        <div className="error-container">
          <p>❌ {error || "Subject not found"}</p>
          <a href="/teacher/course">Back to Subjects</a>
        </div>
      </div>
    );
  }

  return (
    <div className="subject-detail-page">
      <div className="detail-sidebar-overlay"></div>
      <aside className="detail-sidebar">
        <a href="/teacher/home" className="detail-brand">
          <span className="logo-mark" />
          <div>
            <strong>BachKhoaViet</strong>
            <small>AI Educational Platform</small>
          </div>
        </a>

        <nav className="detail-nav">
          <a href="/teacher/home">My Classes</a>
          <a href="/teacher/course" className="active">
            Subjects & Courses
          </a>
          <a href="/teacher/exams">Quizzes & Tests</a>
          <a href="/teacher/arena">Class Performance</a>
          <a href="/teacher/leaderboard">Analytics Dashboard</a>
          <a href="/teacher/messages">Student Messages</a>
        </nav>

        <a href="/teacher/profile" className="detail-profile-shortcut">
          ⚙ Profile & Settings
        </a>
      </aside>

      <main className="detail-main">
        <header className="detail-topbar">
          <div className="detail-topbar-left">
            <a href="/teacher/course" className="back-btn">
              ← Back
            </a>
          </div>
          <div className="detail-topbar-center">
            <h1>{subject.name}</h1>
          </div>
          <div className="detail-actions">
            <button className="btn btn-primary">✏️ Edit</button>
            <button className="btn btn-danger">🗑️ Delete</button>
          </div>
        </header>

        <section className="detail-content">
          <div className="detail-grid">
            <aside className="detail-sidebar-info">
              <article className="info-card">
                <h3>📚 Subject Information</h3>
                {subject.iconUrl && (
                  <div className="subject-icon">
                    <img
                      src={subject.iconUrl.url}
                      alt={subject.name}
                      title={subject.name}
                    />
                  </div>
                )}
                <dl>
                  <dt>Name</dt>
                  <dd>{subject.name}</dd>

                  <dt>Slug</dt>
                  <dd>{subject.slug}</dd>

                  <dt>ID</dt>
                  <dd className="code">{subject.id}</dd>

                  <dt>Status</dt>
                  <dd>
                    {subject.isDeleted ? (
                      <span className="badge badge-danger">Deleted</span>
                    ) : (
                      <span className="badge badge-success">Active</span>
                    )}
                  </dd>
                </dl>
              </article>

              <article className="info-card">
                <h3>⏰ Timestamps</h3>
                <dl>
                  <dt>Created</dt>
                  <dd>{new Date(subject.createdAt).toLocaleString("vi-VN")}</dd>

                  <dt>Last Updated</dt>
                  <dd>{new Date(subject.updatedAt).toLocaleString("vi-VN")}</dd>
                </dl>
              </article>
            </aside>

            <section className="detail-main-content">
              <article className="content-card">
                <h2>📖 About This Subject</h2>
                <p>
                  This subject covers comprehensive educational content related
                  to {subject.name}. Students enrolled in this subject will have
                  access to:
                </p>
                <ul>
                  <li>Comprehensive lesson materials</li>
                  <li>Interactive practice exercises</li>
                  <li>Quizzes and assessments</li>
                  <li>AI-powered tutoring support</li>
                  <li>Progress tracking and analytics</li>
                </ul>
              </article>

              <article className="content-card">
                <h2>📊 Class Statistics</h2>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">0</div>
                    <div className="stat-label">Total Students</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">0</div>
                    <div className="stat-label">Active Classes</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">0</div>
                    <div className="stat-label">Completed Assignments</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">0</div>
                    <div className="stat-label">Avg. Grade</div>
                  </div>
                </div>
              </article>

              <article className="content-card">
                <h2>🎯 Actions</h2>
                <div className="action-buttons">
                  <button className="btn btn-primary btn-lg">
                    ➕ Create New Class
                  </button>
                  <button className="btn btn-secondary btn-lg">
                    📋 View Assignments
                  </button>
                  <button className="btn btn-secondary btn-lg">
                    🧑‍🎓 Manage Students
                  </button>
                  <button className="btn btn-secondary btn-lg">
                    📈 View Analytics
                  </button>
                </div>
              </article>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SubjectDetailPage;
